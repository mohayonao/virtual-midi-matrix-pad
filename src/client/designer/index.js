export const WIDTH = 1000;
export const HEIGHT = 1000;

export const PadWidth  = 100;
export const PadHeight = 100;
export const PaddingTop   =  50;
export const PaddingLeft  =  50;

export const PadLayout = `
  (a) (b) (c) (d) (e) (f) (g) (h) { }
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (1)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (2)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (3)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (4)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (5)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (6)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (7)
  [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ] (8)
`.trim().split("\n").map(x => x.match(/[\[\(\{].[\}\)\]]/g));

export const PadCaptions = {
  "(a)": "Up",
  "(b)": "Down",
  "(c)": "Left",
  "(d)": "Right",
  "(e)": "Sess",
  "(f)": "Usr1",
  "(g)": "Usr2",
  "(h)": "Mixr",
  "(1)": "Vol",
  "(2)": "Pan",
  "(3)": "SndA",
  "(4)": "SndB",
  "(5)": "Stop",
  "(6)": "Mute",
  "(7)": "Solo",
  "(8)": "RecA",
};

export function toCX(col) {
  return col * PadWidth + (PaddingLeft + PadWidth / 2);
}

export function toCY(row) {
  return row * PadHeight + (PaddingTop + PadHeight / 2);
}
