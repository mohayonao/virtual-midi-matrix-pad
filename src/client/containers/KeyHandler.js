import KeyTemplate, { MatrixKeys } from "../designer/KeyTemplate";

const KeyOn = new Set();

const CursorMap = [ 2, 0, 3, 1 ];
const MatrixMap = MatrixKeys.map(ch => ch.charCodeAt(0));
const KeyTemplateMap = "7890UIOPM".split("").map(ch => ch.charCodeAt(0));

const state = { keyTemplate: 0 };

export function keyDown(keyCode, props) {
  if (KeyOn.has(keyCode)) {
    return;
  }
  KeyOn.add(keyCode);

  const { actions } = props;
  const matrixIndex = MatrixMap.indexOf(keyCode);
  const keyTemplateIndex = KeyTemplateMap.indexOf(keyCode);

  if (matrixIndex !== -1) {
    actions.valueChange(...KeyTemplate[state.keyTemplate][matrixIndex], 0x7f);
  } else if (keyTemplateIndex !== -1) {
    state.keyTemplate = keyTemplateIndex;
    actions.selectKeyTemplate(keyTemplateIndex);
  } else if (37 <= keyCode && keyCode <= 40) {
    actions.valueChange(0, CursorMap[keyCode - 37], 0x7f);
  }
}

export function keyUp(keyCode, props) {
  if (!KeyOn.has(keyCode)) {
    return;
  }
  KeyOn.delete(keyCode);

  const { actions } = props;
  const matrixIndex = MatrixMap.indexOf(keyCode);

  if (matrixIndex !== -1) {
    actions.valueChange(...KeyTemplate[state.keyTemplate][matrixIndex], 0x00);
  } else if (37 <= keyCode && keyCode <= 40) {
    actions.valueChange(0, CursorMap[keyCode - 37], 0x00);
  }
}
