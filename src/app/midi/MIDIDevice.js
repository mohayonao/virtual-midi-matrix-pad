import midi from "midi";
import * as types from "../../common/ActionTypes";
import { NUMBER_OF_COLS } from "../../common/constants";

export default class MIDIDevice {
  constructor(deviceName, actions) {
    this.deviceName = deviceName;
    this.actions = actions;
    this.midiInput = null;
    this.midiOutput = null;
    this.state = {};
  }

  open() {
    if (this.midiInput === null) {
      this.midiInput = new midi.input();
      this.midiInput.openVirtualPort(this.deviceName);
      this.midiInput.on("message", (_, data) => {
        this.recvMessage(data);
      });
    }
    if (this.midiOutput === null) {
      this.midiOutput = new midi.output();
      this.midiOutput.openVirtualPort(this.deviceName);
    }
  }

  close() {
    if (this.midiInput !== null) {
      this.midiInput.closePort();
      this.midiInput = null;
    }
    if (this.midiOutput !== null) {
      this.midiOutput.closePort();
      this.midiOutput = null;
    }
  }

  setState(/* state */) {}

  doAction(action) {
    switch (action.type) {
    case types.VALUE_CHANGE:
      fromLaunchPadPos(action.row, action.col, (st, d1) => {
        this.sendMessage(st, d1, action.value);
      });
      break;
    }
  }

  recvMessage([ st, d1, d2 ]) {
    toLaunchPadPos(st, d1, (row, col) => {
      this.actions.valueSet(row, col, d2);
    });
  }

  sendMessage(st, d1, d2) {
    if (this.midiOutput !== null) {
      this.midiOutput.sendMessage([ st, d1, d2 ]);
    }
  }
}

export const D1 = [
  0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x00,
  0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59,
  0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f,
  0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45,
  0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b,
  0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31,
  0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27,
  0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d,
  0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13,
];

export function fromLaunchPadPos(row, col, callback) {
  const st = row === 0 ? 0xb0 : 0x90;
  const d1 = D1[row * NUMBER_OF_COLS + col] || 0x00;

  if (d1 !== 0x00) {
    callback(st, d1);
  }
}

export function toLaunchPadPos(st, d1, callback) {
  const index = D1.indexOf(d1);

  if (index !== -1) {
    callback(Math.floor(index / NUMBER_OF_COLS), Math.floor(index % NUMBER_OF_COLS));
  }
}
