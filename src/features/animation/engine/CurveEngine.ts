export class CurveEngine {
  public solveBezier(_p1: number, _p2: number, _p3: number, _p4: number, t: number) {
    console.log('Curve Engine: Solving cubic bezier');
    return t; // Placeholder
  }
}

export const curveEngine = new CurveEngine();
