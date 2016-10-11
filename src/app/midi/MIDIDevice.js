import midi from "midi";
// import * as types from "../../common/ActionTypes";

export default class MIDIDevice {
  constructor(deviceName, actions) {
    this.deviceName = deviceName;
    this.actions = actions;

    this.midiInput = new midi.input();
    this.midiInput.openVirtualPort(this.deviceName);
    this.midiInput.on("message", (_, data) => {
      this.recvMessage(...data);
    });

    this.midiOutput = new midi.output();
    this.midiOutput.openVirtualPort(this.deviceName);

    this.state = {};
  }

  setState(/* state */) {
  }

  doAction(/* action */) {
  }

  recvMessage(/* st, d1, d2 */) {
  }

  sendMessage(st, d1, d2) {
    this.midiOutput.sendMessage([ st, d1, d2 ]);
  }
}
