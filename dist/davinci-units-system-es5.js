System.register("davinci-units/math/extE2.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function extE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0);
        }
        break;
      case 1:
        {
          x = +(a0 * b1 + a1 * b0);
        }
        break;
      case 2:
        {
          x = +(a0 * b2 + a2 * b0);
        }
        break;
      case 3:
        {
          x = +(a0 * b3 + a1 * b2 - a2 * b1 + a3 * b0);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..3]");
        }
    }
    return +x;
  }
  exports_1("default", extE2);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/lcoE2.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3);
        }
        break;
      case 1:
        {
          x = +(a0 * b1 - a2 * b3);
        }
        break;
      case 2:
        {
          x = +(a0 * b2 + a1 * b3);
        }
        break;
      case 3:
        {
          x = +(a0 * b3);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..3]");
        }
    }
    return +x;
  }
  exports_1("default", lcoE2);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/mulE2.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function mulE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3);
        }
        break;
      case 1:
        {
          x = +(a0 * b1 + a1 * b0 - a2 * b3 + a3 * b2);
        }
        break;
      case 2:
        {
          x = +(a0 * b2 + a1 * b3 + a2 * b0 - a3 * b1);
        }
        break;
      case 3:
        {
          x = +(a0 * b3 + a1 * b2 - a2 * b1 + a3 * b0);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..3]");
        }
    }
    return +x;
  }
  exports_1("default", mulE2);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/rcoE2.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3);
        }
        break;
      case 1:
        {
          x = +(-a1 * b0 - a3 * b2);
        }
        break;
      case 2:
        {
          x = +(-a2 * b0 + a3 * b1);
        }
        break;
      case 3:
        {
          x = +(a3 * b0);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..3]");
        }
    }
    return +x;
  }
  exports_1("default", rcoE2);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/scpE2.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function scpE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    switch (index) {
      case 0:
        return a0 * b0 + a1 * b1 + a2 * b2 - a3 * b3;
      case 1:
        return 0;
      case 2:
        return 0;
      case 3:
        return 0;
      default:
        throw new Error("index must be in the range [0..3]");
    }
  }
  exports_1("default", scpE2);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/G2.js", ["./bezier2", "./bezier3", "./extE2", "./gauss", "./lcoE2", "./mulE2", "../i18n/notImplemented", "../i18n/notSupported", "../i18n/readOnly", "./rcoE2", "./scpE2", "./stringFromCoordinates", "./Unit"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var bezier2_1,
      bezier3_1,
      extE2_1,
      gauss_1,
      lcoE2_1,
      mulE2_1,
      notImplemented_1,
      notSupported_1,
      readOnly_1,
      rcoE2_1,
      scpE2_1,
      stringFromCoordinates_1,
      Unit_1;
  var COORD_SCALAR,
      COORD_X,
      COORD_Y,
      COORD_PSEUDO,
      G2;
  function add00(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a00 + b00);
  }
  function add01(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a01 + b01);
  }
  function add10(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a10 + b10);
  }
  function add11(a00, a01, a10, a11, b00, b01, b10, b11) {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a11 + b11);
  }
  function subE2(a0, a1, a2, a3, b0, b1, b2, b3, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 - b0);
        }
        break;
      case 1:
        {
          x = +(a1 - b1);
        }
        break;
      case 2:
        {
          x = +(a2 - b2);
        }
        break;
      case 3:
        {
          x = +(a3 - b3);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..3]");
        }
    }
    return +x;
  }
  return {
    setters: [function(bezier2_1_1) {
      bezier2_1 = bezier2_1_1;
    }, function(bezier3_1_1) {
      bezier3_1 = bezier3_1_1;
    }, function(extE2_1_1) {
      extE2_1 = extE2_1_1;
    }, function(gauss_1_1) {
      gauss_1 = gauss_1_1;
    }, function(lcoE2_1_1) {
      lcoE2_1 = lcoE2_1_1;
    }, function(mulE2_1_1) {
      mulE2_1 = mulE2_1_1;
    }, function(notImplemented_1_1) {
      notImplemented_1 = notImplemented_1_1;
    }, function(notSupported_1_1) {
      notSupported_1 = notSupported_1_1;
    }, function(readOnly_1_1) {
      readOnly_1 = readOnly_1_1;
    }, function(rcoE2_1_1) {
      rcoE2_1 = rcoE2_1_1;
    }, function(scpE2_1_1) {
      scpE2_1 = scpE2_1_1;
    }, function(stringFromCoordinates_1_1) {
      stringFromCoordinates_1 = stringFromCoordinates_1_1;
    }, function(Unit_1_1) {
      Unit_1 = Unit_1_1;
    }],
    execute: function() {
      COORD_SCALAR = 0;
      COORD_X = 1;
      COORD_Y = 2;
      COORD_PSEUDO = 3;
      G2 = (function() {
        function G2(α, x, y, β, uom) {
          if (α === void 0) {
            α = 0;
          }
          if (x === void 0) {
            x = 0;
          }
          if (y === void 0) {
            y = 0;
          }
          if (β === void 0) {
            β = 0;
          }
          this._coords = [0, 0, 0, 0];
          this._coords[COORD_SCALAR] = α;
          this._coords[COORD_X] = x;
          this._coords[COORD_Y] = y;
          this._coords[COORD_PSEUDO] = β;
          this.uom = uom;
          if (this.uom && this.uom.multiplier !== 1) {
            var multiplier = this.uom.multiplier;
            this._coords[COORD_SCALAR] *= multiplier;
            this._coords[COORD_X] *= multiplier;
            this._coords[COORD_Y] *= multiplier;
            this._coords[COORD_PSEUDO] *= multiplier;
            this.uom = new Unit_1.Unit(1, uom.dimensions, uom.labels);
          }
        }
        Object.defineProperty(G2, "zero", {
          get: function() {
            return G2._zero;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('zero').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2, "one", {
          get: function() {
            return G2._one;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('one').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2, "e1", {
          get: function() {
            return G2._e1;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('e1').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2, "e2", {
          get: function() {
            return G2._e2;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('e2').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2, "I", {
          get: function() {
            return G2._I;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('I').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2.prototype, "a", {
          get: function() {
            return this._coords[COORD_SCALAR];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('a').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2.prototype, "x", {
          get: function() {
            return this._coords[COORD_X];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('x').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2.prototype, "y", {
          get: function() {
            return this._coords[COORD_Y];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('y').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G2.prototype, "b", {
          get: function() {
            return this._coords[COORD_PSEUDO];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('b').message);
          },
          enumerable: true,
          configurable: true
        });
        G2.fromCartesian = function(α, x, y, β, uom) {
          return new G2(α, x, y, β, uom);
        };
        Object.defineProperty(G2.prototype, "coords", {
          get: function() {
            return [this.a, this.x, this.y, this.b];
          },
          enumerable: true,
          configurable: true
        });
        G2.prototype.coordinate = function(index) {
          switch (index) {
            case 0:
              return this.a;
            case 1:
              return this.x;
            case 2:
              return this.y;
            case 3:
              return this.b;
            default:
              throw new Error("index must be in the range [0..3]");
          }
        };
        G2.add = function(a, b) {
          var a00 = a[0];
          var a01 = a[1];
          var a10 = a[2];
          var a11 = a[3];
          var b00 = b[0];
          var b01 = b[1];
          var b10 = b[2];
          var b11 = b[3];
          var x00 = add00(a00, a01, a10, a11, b00, b01, b10, b11);
          var x01 = add01(a00, a01, a10, a11, b00, b01, b10, b11);
          var x10 = add10(a00, a01, a10, a11, b00, b01, b10, b11);
          var x11 = add11(a00, a01, a10, a11, b00, b01, b10, b11);
          return [x00, x01, x10, x11];
        };
        G2.prototype.add = function(rhs) {
          var xs = G2.add(this.coords, rhs.coords);
          return new G2(xs[0], xs[1], xs[2], xs[3], Unit_1.Unit.compatible(this.uom, rhs.uom));
        };
        G2.prototype.addPseudo = function(β) {
          return new G2(this.a, this.x, this.y, this.b + β.multiplier, Unit_1.Unit.compatible(this.uom, β));
        };
        G2.prototype.addScalar = function(α) {
          return new G2(this.a + α.multiplier, this.x, this.y, this.b, Unit_1.Unit.compatible(this.uom, α));
        };
        G2.prototype.__add__ = function(other) {
          if (other instanceof G2) {
            return this.add(other);
          } else if (typeof other === 'number') {
            return this.add(new G2(other, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__radd__ = function(other) {
          if (other instanceof G2) {
            return other.add(this);
          } else if (typeof other === 'number') {
            return new G2(other, 0, 0, 0, undefined).add(this);
          }
        };
        G2.prototype.adj = function() {
          throw new Error(notImplemented_1.default('adj').message);
        };
        G2.prototype.angle = function() {
          return this.log().grade(2);
        };
        G2.prototype.conj = function() {
          throw new Error(notImplemented_1.default('conj').message);
        };
        G2.prototype.cubicBezier = function(t, controlBegin, controlEnd, endPoint) {
          var α = bezier3_1.default(t, this.a, controlBegin.a, controlEnd.a, endPoint.a);
          var x = bezier3_1.default(t, this.x, controlBegin.x, controlEnd.x, endPoint.x);
          var y = bezier3_1.default(t, this.y, controlBegin.y, controlEnd.y, endPoint.y);
          var β = bezier3_1.default(t, this.b, controlBegin.b, controlEnd.b, endPoint.b);
          return new G2(α, x, y, β, this.uom);
        };
        G2.prototype.direction = function() {
          var m = this.magnitudeSansUnits();
          if (m !== 1) {
            return new G2(this.a / m, this.x / m, this.y / m, this.b / m);
          } else {
            if (this.uom) {
              return new G2(this.a, this.x, this.y, this.b);
            } else {
              return this;
            }
          }
        };
        G2.prototype.distanceTo = function(point) {
          throw new Error(notImplemented_1.default('distanceTo').message);
        };
        G2.prototype.equals = function(point) {
          throw new Error(notImplemented_1.default('equals').message);
        };
        G2.sub = function(a, b) {
          var a0 = a[0];
          var a1 = a[1];
          var a2 = a[2];
          var a3 = a[3];
          var b0 = b[0];
          var b1 = b[1];
          var b2 = b[2];
          var b3 = b[3];
          var x0 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
          var x1 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
          var x2 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
          var x3 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
          return [x0, x1, x2, x3];
        };
        G2.prototype.sub = function(rhs) {
          var xs = G2.sub(this.coords, rhs.coords);
          return new G2(xs[0], xs[1], xs[2], xs[3], Unit_1.Unit.compatible(this.uom, rhs.uom));
        };
        G2.prototype.__sub__ = function(rhs) {
          if (rhs instanceof G2) {
            return this.sub(rhs);
          } else if (rhs instanceof Unit_1.Unit) {
            return this.addScalar(rhs.neg());
          } else if (typeof rhs === 'number') {
            return this.sub(new G2(rhs, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rsub__ = function(lhs) {
          if (lhs instanceof G2) {
            return lhs.sub(this);
          } else if (lhs instanceof Unit_1.Unit) {
            return this.neg().addScalar(lhs);
          } else if (typeof lhs === 'number') {
            return new G2(lhs, 0, 0, 0, undefined).sub(this);
          }
        };
        G2.prototype.mul = function(rhs) {
          var a0 = this.a;
          var a1 = this.x;
          var a2 = this.y;
          var a3 = this.b;
          var b0 = rhs.a;
          var b1 = rhs.x;
          var b2 = rhs.y;
          var b3 = rhs.b;
          var c0 = mulE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 0);
          var c1 = mulE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 1);
          var c2 = mulE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 2);
          var c3 = mulE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 3);
          return new G2(c0, c1, c2, c3, Unit_1.Unit.mul(this.uom, rhs.uom));
        };
        G2.prototype.__mul__ = function(other) {
          if (other instanceof G2) {
            return this.mul(other);
          } else if (typeof other === 'number') {
            return this.mul(new G2(other, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rmul__ = function(other) {
          if (other instanceof G2) {
            var lhs = other;
            return lhs.mul(this);
          } else if (typeof other === 'number') {
            var w = other;
            return new G2(w, 0, 0, 0, undefined).mul(this);
          }
        };
        G2.prototype.scale = function(α) {
          return new G2(this.a * α, this.x * α, this.y * α, this.b * α, this.uom);
        };
        G2.prototype.div = function(rhs) {
          return this.mul(rhs.inv());
        };
        G2.prototype.divByScalar = function(α) {
          return new G2(this.a / α, this.x / α, this.y / α, this.b / α, this.uom);
        };
        G2.prototype.__div__ = function(other) {
          if (other instanceof G2) {
            return this.div(other);
          } else if (typeof other === 'number') {
            var w = other;
            return this.div(new G2(w, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rdiv__ = function(other) {
          if (other instanceof G2) {
            return other.div(this);
          } else if (typeof other === 'number') {
            return new G2(other, 0, 0, 0, undefined).div(this);
          }
        };
        G2.prototype.scp = function(rhs) {
          var a0 = this.a;
          var a1 = this.x;
          var a2 = this.y;
          var a3 = this.b;
          var b0 = rhs.a;
          var b1 = rhs.x;
          var b2 = rhs.y;
          var b3 = rhs.b;
          var c0 = scpE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 0);
          return new G2(c0, 0, 0, 0, Unit_1.Unit.mul(this.uom, rhs.uom));
        };
        G2.ext = function(a, b) {
          var a0 = a[0];
          var a1 = a[1];
          var a2 = a[2];
          var a3 = a[3];
          var b0 = b[0];
          var b1 = b[1];
          var b2 = b[2];
          var b3 = b[3];
          var x0 = extE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 0);
          var x1 = extE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 1);
          var x2 = extE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 2);
          var x3 = extE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 3);
          return [x0, x1, x2, x3];
        };
        G2.prototype.ext = function(rhs) {
          var xs = G2.ext(this.coords, rhs.coords);
          return new G2(xs[0], xs[1], xs[2], xs[3], Unit_1.Unit.mul(this.uom, rhs.uom));
        };
        G2.prototype.__wedge__ = function(other) {
          if (other instanceof G2) {
            var rhs = other;
            return this.ext(rhs);
          } else if (typeof other === 'number') {
            var w = other;
            return this.ext(new G2(w, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rwedge__ = function(other) {
          if (other instanceof G2) {
            var lhs = other;
            return lhs.ext(this);
          } else if (typeof other === 'number') {
            var w = other;
            return new G2(w, 0, 0, 0, undefined).ext(this);
          }
        };
        G2.lshift = function(a, b) {
          var a0 = a[0];
          var a1 = a[1];
          var a2 = a[2];
          var a3 = a[3];
          var b0 = b[0];
          var b1 = b[1];
          var b2 = b[2];
          var b3 = b[3];
          var x0 = lcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 0);
          var x1 = lcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 1);
          var x2 = lcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 2);
          var x3 = lcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 3);
          return [x0, x1, x2, x3];
        };
        G2.prototype.lerp = function(target, α) {
          throw new Error(notImplemented_1.default('lerp').message);
        };
        G2.prototype.lco = function(rhs) {
          var xs = G2.lshift(this.coords, rhs.coords);
          return new G2(xs[0], xs[1], xs[2], xs[3], Unit_1.Unit.mul(this.uom, rhs.uom));
        };
        G2.prototype.__lshift__ = function(other) {
          if (other instanceof G2) {
            var rhs = other;
            return this.lco(rhs);
          } else if (typeof other === 'number') {
            var w = other;
            return this.lco(new G2(w, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rlshift__ = function(other) {
          if (other instanceof G2) {
            var lhs = other;
            return lhs.lco(this);
          } else if (typeof other === 'number') {
            var w = other;
            return new G2(w, 0, 0, 0, undefined).lco(this);
          }
        };
        G2.rshift = function(a, b) {
          var a0 = a[0];
          var a1 = a[1];
          var a2 = a[2];
          var a3 = a[3];
          var b0 = b[0];
          var b1 = b[1];
          var b2 = b[2];
          var b3 = b[3];
          var x0 = rcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 0);
          var x1 = rcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 1);
          var x2 = rcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 2);
          var x3 = rcoE2_1.default(a0, a1, a2, a3, b0, b1, b2, b3, 3);
          return [x0, x1, x2, x3];
        };
        G2.prototype.rco = function(rhs) {
          var xs = G2.rshift(this.coords, rhs.coords);
          return new G2(xs[0], xs[1], xs[2], xs[3], Unit_1.Unit.mul(this.uom, rhs.uom));
        };
        G2.prototype.__rshift__ = function(other) {
          if (other instanceof G2) {
            return this.rco(other);
          } else if (typeof other === 'number') {
            return this.rco(new G2(other, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rrshift__ = function(other) {
          if (other instanceof G2) {
            return other.rco(this);
          } else if (typeof other === 'number') {
            return new G2(other, 0, 0, 0, undefined).rco(this);
          }
        };
        G2.prototype.__vbar__ = function(other) {
          if (other instanceof G2) {
            return this.scp(other);
          } else if (typeof other === 'number') {
            return this.scp(new G2(other, 0, 0, 0, undefined));
          }
        };
        G2.prototype.__rvbar__ = function(other) {
          if (other instanceof G2) {
            return other.scp(this);
          } else if (typeof other === 'number') {
            return new G2(other, 0, 0, 0, undefined).scp(this);
          }
        };
        G2.prototype.pow = function(exponent) {
          throw new Error(notImplemented_1.default('pow').message);
        };
        G2.prototype.__bang__ = function() {
          return this.inv();
        };
        G2.prototype.__pos__ = function() {
          return this;
        };
        G2.prototype.neg = function() {
          return new G2(-this.a, -this.x, -this.y, -this.b, this.uom);
        };
        G2.prototype.__neg__ = function() {
          return this.neg();
        };
        G2.prototype.__tilde__ = function() {
          return this.rev();
        };
        G2.prototype.grade = function(grade) {
          switch (grade) {
            case 0:
              return new G2(this.a, 0, 0, 0, this.uom);
            case 1:
              return new G2(0, this.x, this.y, 0, this.uom);
            case 2:
              return new G2(0, 0, 0, this.b, this.uom);
            default:
              return new G2(0, 0, 0, 0, this.uom);
          }
        };
        G2.prototype.cos = function() {
          throw new Error(notImplemented_1.default('cos').message);
        };
        G2.prototype.cosh = function() {
          throw new Error(notImplemented_1.default('cosh').message);
        };
        G2.prototype.exp = function() {
          Unit_1.Unit.assertDimensionless(this.uom);
          if (this.isSpinor()) {
            var expα = Math.exp(this.a);
            var cosβ = Math.cos(this.b);
            var sinβ = Math.sin(this.b);
            return new G2(expα * cosβ, 0, 0, expα * sinβ);
          } else {
            throw new Error(notImplemented_1.default("exp(" + this.toString() + ")").message);
          }
        };
        G2.prototype.inv = function() {
          var α = this.a;
          var x = this.x;
          var y = this.y;
          var β = this.b;
          var A = [[α, x, y, -β], [x, α, β, -y], [y, -β, α, x], [β, -y, x, α]];
          var b = [1, 0, 0, 0];
          var X = gauss_1.default(A, b);
          var uom = this.uom ? this.uom.inv() : void 0;
          return new G2(X[0], X[1], X[2], X[3], uom);
        };
        G2.prototype.isSpinor = function() {
          return this.x === 0 && this.y === 0;
        };
        G2.prototype.log = function() {
          throw new Error(notImplemented_1.default('log').message);
        };
        G2.prototype.magnitude = function() {
          return this.norm();
        };
        G2.prototype.magnitudeSansUnits = function() {
          return Math.sqrt(this.squaredNormSansUnits());
        };
        G2.prototype.norm = function() {
          return new G2(this.magnitudeSansUnits(), 0, 0, 0, this.uom);
        };
        G2.prototype.quad = function() {
          return new G2(this.squaredNormSansUnits(), 0, 0, 0, Unit_1.Unit.mul(this.uom, this.uom));
        };
        G2.prototype.quadraticBezier = function(t, controlPoint, endPoint) {
          var α = bezier2_1.default(t, this.a, controlPoint.a, endPoint.a);
          var x = bezier2_1.default(t, this.x, controlPoint.x, endPoint.x);
          var y = bezier2_1.default(t, this.y, controlPoint.y, endPoint.y);
          var β = bezier2_1.default(t, this.b, controlPoint.b, endPoint.b);
          return new G2(α, x, y, β, this.uom);
        };
        G2.prototype.squaredNorm = function() {
          return this.quad();
        };
        G2.prototype.squaredNormSansUnits = function() {
          var α = this.a;
          var x = this.x;
          var y = this.y;
          var β = this.b;
          return α * α + x * x + y * y + β * β;
        };
        G2.prototype.stress = function(σ) {
          throw new Error(notSupported_1.default('stress').message);
        };
        G2.prototype.reflect = function(n) {
          var m = G2.fromVectorE2(n);
          return m.mul(this).mul(m).scale(-1);
        };
        G2.prototype.rev = function() {
          return new G2(this.a, this.x, this.y, -this.b, this.uom);
        };
        G2.prototype.rotate = function(spinor) {
          var x = this.x;
          var y = this.y;
          var α = spinor.a;
          var β = spinor.b;
          var α2 = α * α;
          var β2 = β * β;
          var p = α2 - β2;
          var q = 2 * α * β;
          var s = α2 + β2;
          return new G2(s * this.a, p * x + q * y, p * y - q * x, s * this.b, this.uom);
        };
        G2.prototype.sin = function() {
          throw new Error(notImplemented_1.default('sin').message);
        };
        G2.prototype.sinh = function() {
          throw new Error(notImplemented_1.default('sinh').message);
        };
        G2.prototype.slerp = function(target, α) {
          throw new Error(notImplemented_1.default('slerp').message);
        };
        G2.prototype.tan = function() {
          return this.sin().div(this.cos());
        };
        G2.prototype.isOne = function() {
          return this.a === 1 && this.x === 0 && this.y === 0 && this.b === 0;
        };
        G2.prototype.isNaN = function() {
          return isNaN(this.a) || isNaN(this.x) || isNaN(this.y) || isNaN(this.b);
        };
        G2.prototype.isZero = function() {
          return this.a === 0 && this.x === 0 && this.y === 0 && this.b === 0;
        };
        G2.prototype.toStringCustom = function(coordToString, labels) {
          var quantityString = stringFromCoordinates_1.default(this.coords, coordToString, labels);
          if (this.uom) {
            var unitString = this.uom.toString().trim();
            if (unitString) {
              return quantityString + ' ' + unitString;
            } else {
              return quantityString;
            }
          } else {
            return quantityString;
          }
        };
        G2.prototype.toExponential = function(fractionDigits) {
          var coordToString = function(coord) {
            return coord.toExponential(fractionDigits);
          };
          return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
        };
        G2.prototype.toFixed = function(fractionDigits) {
          var coordToString = function(coord) {
            return coord.toFixed(fractionDigits);
          };
          return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
        };
        G2.prototype.toPrecision = function(precision) {
          var coordToString = function(coord) {
            return coord.toPrecision(precision);
          };
          return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
        };
        G2.prototype.toString = function(radix) {
          var coordToString = function(coord) {
            return coord.toString(radix);
          };
          return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
        };
        G2.prototype.toStringIJK = function() {
          var coordToString = function(coord) {
            return coord.toString();
          };
          return this.toStringCustom(coordToString, ["1", "i", "j", "I"]);
        };
        G2.copy = function(m) {
          if (m instanceof G2) {
            return m;
          } else {
            return new G2(m.a, m.x, m.y, m.b, void 0);
          }
        };
        G2.fromVectorE2 = function(vector) {
          if (vector) {
            if (vector instanceof G2) {
              return new G2(0, vector.x, vector.y, 0, vector.uom);
            } else {
              return new G2(0, vector.x, vector.y, 0, void 0);
            }
          } else {
            return void 0;
          }
        };
        G2.vector = function(x, y, uom) {
          return new G2(0, x, y, 0, uom);
        };
        G2._zero = new G2(0, 0, 0, 0);
        G2._one = new G2(1, 0, 0, 0);
        G2._e1 = new G2(0, 1, 0, 0);
        G2._e2 = new G2(0, 0, 1, 0);
        G2._I = new G2(0, 0, 0, 1);
        G2.kilogram = new G2(1, 0, 0, 0, Unit_1.Unit.KILOGRAM);
        G2.meter = new G2(1, 0, 0, 0, Unit_1.Unit.METER);
        G2.second = new G2(1, 0, 0, 0, Unit_1.Unit.SECOND);
        G2.coulomb = new G2(1, 0, 0, 0, Unit_1.Unit.COULOMB);
        G2.ampere = new G2(1, 0, 0, 0, Unit_1.Unit.AMPERE);
        G2.kelvin = new G2(1, 0, 0, 0, Unit_1.Unit.KELVIN);
        G2.mole = new G2(1, 0, 0, 0, Unit_1.Unit.MOLE);
        G2.candela = new G2(1, 0, 0, 0, Unit_1.Unit.CANDELA);
        return G2;
      }());
      exports_1("G2", G2);
    }
  };
});

System.register("davinci-units/math/bezier2.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function b2p0(t, p) {
    var k = 1 - t;
    return k * k * p;
  }
  function b2p1(t, p) {
    return 2 * (1 - t) * t * p;
  }
  function b2p2(t, p) {
    return t * t * p;
  }
  function b2(t, begin, control, end) {
    return b2p0(t, begin) + b2p1(t, control) + b2p2(t, end);
  }
  exports_1("default", b2);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/bezier3.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function b3p0(t, p) {
    var k = 1 - t;
    return k * k * k * p;
  }
  function b3p1(t, p) {
    var k = 1 - t;
    return 3 * k * k * t * p;
  }
  function b3p2(t, p) {
    var k = 1 - t;
    return 3 * k * t * t * p;
  }
  function b3p3(t, p) {
    return t * t * t * p;
  }
  function default_1(t, p0, p1, p2, p3) {
    return b3p0(t, p0) + b3p1(t, p1) + b3p2(t, p2) + b3p3(t, p3);
  }
  exports_1("default", default_1);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/extE3.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0);
        }
        break;
      case 1:
        {
          x = +(a0 * b1 + a1 * b0);
        }
        break;
      case 2:
        {
          x = +(a0 * b2 + a2 * b0);
        }
        break;
      case 3:
        {
          x = +(a0 * b3 + a3 * b0);
        }
        break;
      case 4:
        {
          x = +(a0 * b4 + a1 * b2 - a2 * b1 + a4 * b0);
        }
        break;
      case 5:
        {
          x = +(a0 * b5 + a2 * b3 - a3 * b2 + a5 * b0);
        }
        break;
      case 6:
        {
          x = +(a0 * b6 - a1 * b3 + a3 * b1 + a6 * b0);
        }
        break;
      case 7:
        {
          x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
  }
  exports_1("default", extE3);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/extG3.js", ["../math/compG3Get", "../math/extE3", "../math/compG3Set"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var compG3Get_1,
      extE3_1,
      compG3Set_1;
  function extG3(a, b, out) {
    var a0 = compG3Get_1.default(a, 0);
    var a1 = compG3Get_1.default(a, 1);
    var a2 = compG3Get_1.default(a, 2);
    var a3 = compG3Get_1.default(a, 3);
    var a4 = compG3Get_1.default(a, 4);
    var a5 = compG3Get_1.default(a, 5);
    var a6 = compG3Get_1.default(a, 6);
    var a7 = compG3Get_1.default(a, 7);
    var b0 = compG3Get_1.default(b, 0);
    var b1 = compG3Get_1.default(b, 1);
    var b2 = compG3Get_1.default(b, 2);
    var b3 = compG3Get_1.default(b, 3);
    var b4 = compG3Get_1.default(b, 4);
    var b5 = compG3Get_1.default(b, 5);
    var b6 = compG3Get_1.default(b, 6);
    var b7 = compG3Get_1.default(b, 7);
    for (var i = 0; i < 8; i++) {
      compG3Set_1.default(out, i, extE3_1.default(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i));
    }
    return out;
  }
  exports_1("default", extG3);
  return {
    setters: [function(compG3Get_1_1) {
      compG3Get_1 = compG3Get_1_1;
    }, function(extE3_1_1) {
      extE3_1 = extE3_1_1;
    }, function(compG3Set_1_1) {
      compG3Set_1 = compG3Set_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/gauss.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var abs;
  function makeColumnVector(n, v) {
    var a = [];
    for (var i = 0; i < n; i++) {
      a.push(v);
    }
    return a;
  }
  function rowWithMaximumInColumn(A, column, N) {
    var biggest = abs(A[column][column]);
    var maxRow = column;
    for (var row = column + 1; row < N; row++) {
      if (abs(A[row][column]) > biggest) {
        biggest = abs(A[row][column]);
        maxRow = row;
      }
    }
    return maxRow;
  }
  function swapRows(A, i, j, N) {
    var colLength = N + 1;
    for (var column = i; column < colLength; column++) {
      var temp = A[j][column];
      A[j][column] = A[i][column];
      A[i][column] = temp;
    }
  }
  function makeZeroBelow(A, i, N) {
    for (var row = i + 1; row < N; row++) {
      var c = -A[row][i] / A[i][i];
      for (var column = i; column < N + 1; column++) {
        if (i === column) {
          A[row][column] = 0;
        } else {
          A[row][column] += c * A[i][column];
        }
      }
    }
  }
  function solve(A, N) {
    var x = makeColumnVector(N, 0);
    for (var i = N - 1; i > -1; i--) {
      x[i] = A[i][N] / A[i][i];
      for (var k = i - 1; k > -1; k--) {
        A[k][N] -= A[k][i] * x[i];
      }
    }
    return x;
  }
  function gauss(A, b) {
    var N = A.length;
    for (var i = 0; i < N; i++) {
      var Ai = A[i];
      var bi = b[i];
      Ai.push(bi);
    }
    for (var j = 0; j < N; j++) {
      swapRows(A, j, rowWithMaximumInColumn(A, j, N), N);
      makeZeroBelow(A, j, N);
    }
    return solve(A, N);
  }
  exports_1("default", gauss);
  return {
    setters: [],
    execute: function() {
      abs = Math.abs;
    }
  };
});

System.register("davinci-units/math/lcoE3.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
        }
        break;
      case 1:
        {
          x = +(a0 * b1 - a2 * b4 + a3 * b6 - a5 * b7);
        }
        break;
      case 2:
        {
          x = +(a0 * b2 + a1 * b4 - a3 * b5 - a6 * b7);
        }
        break;
      case 3:
        {
          x = +(a0 * b3 - a1 * b6 + a2 * b5 - a4 * b7);
        }
        break;
      case 4:
        {
          x = +(a0 * b4 + a3 * b7);
        }
        break;
      case 5:
        {
          x = +(a0 * b5 + a1 * b7);
        }
        break;
      case 6:
        {
          x = +(a0 * b6 + a2 * b7);
        }
        break;
      case 7:
        {
          x = +(a0 * b7);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
  }
  exports_1("default", lcoE3);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/lcoG3.js", ["../math/compG3Get", "../math/lcoE3", "../math/compG3Set"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var compG3Get_1,
      lcoE3_1,
      compG3Set_1;
  function lcoG3(a, b, out) {
    var a0 = compG3Get_1.default(a, 0);
    var a1 = compG3Get_1.default(a, 1);
    var a2 = compG3Get_1.default(a, 2);
    var a3 = compG3Get_1.default(a, 3);
    var a4 = compG3Get_1.default(a, 4);
    var a5 = compG3Get_1.default(a, 5);
    var a6 = compG3Get_1.default(a, 6);
    var a7 = compG3Get_1.default(a, 7);
    var b0 = compG3Get_1.default(b, 0);
    var b1 = compG3Get_1.default(b, 1);
    var b2 = compG3Get_1.default(b, 2);
    var b3 = compG3Get_1.default(b, 3);
    var b4 = compG3Get_1.default(b, 4);
    var b5 = compG3Get_1.default(b, 5);
    var b6 = compG3Get_1.default(b, 6);
    var b7 = compG3Get_1.default(b, 7);
    for (var i = 0; i < 8; i++) {
      compG3Set_1.default(out, i, lcoE3_1.default(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i));
    }
    return out;
  }
  exports_1("default", lcoG3);
  return {
    setters: [function(compG3Get_1_1) {
      compG3Get_1 = compG3Get_1_1;
    }, function(lcoE3_1_1) {
      lcoE3_1 = lcoE3_1_1;
    }, function(compG3Set_1_1) {
      compG3Set_1 = compG3Set_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/mulG3.js", ["../math/compG3Get", "../math/mulE3"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var compG3Get_1,
      mulE3_1;
  function default_1(a, b, out) {
    var a0 = a.a;
    var a1 = a.x;
    var a2 = a.y;
    var a3 = a.z;
    var a4 = a.xy;
    var a5 = a.yz;
    var a6 = a.zx;
    var a7 = a.b;
    var b0 = compG3Get_1.default(b, 0);
    var b1 = compG3Get_1.default(b, 1);
    var b2 = compG3Get_1.default(b, 2);
    var b3 = compG3Get_1.default(b, 3);
    var b4 = compG3Get_1.default(b, 4);
    var b5 = compG3Get_1.default(b, 5);
    var b6 = compG3Get_1.default(b, 6);
    var b7 = compG3Get_1.default(b, 7);
    var iLen = out.length;
    for (var i = 0; i < iLen; i++) {
      out[i] = mulE3_1.default(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i);
    }
  }
  exports_1("default", default_1);
  return {
    setters: [function(compG3Get_1_1) {
      compG3Get_1 = compG3Get_1_1;
    }, function(mulE3_1_1) {
      mulE3_1 = mulE3_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/quadSpinorE3.js", ["../checks/isDefined", "../checks/isNumber"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var isDefined_1,
      isNumber_1;
  function quadSpinorE3(s) {
    if (isDefined_1.default(s)) {
      var α = s.a;
      var x = s.yz;
      var y = s.zx;
      var z = s.xy;
      if (isNumber_1.default(α) && isNumber_1.default(x) && isNumber_1.default(y) && isNumber_1.default(z)) {
        return α * α + x * x + y * y + z * z;
      } else {
        return void 0;
      }
    } else {
      return void 0;
    }
  }
  exports_1("default", quadSpinorE3);
  return {
    setters: [function(isDefined_1_1) {
      isDefined_1 = isDefined_1_1;
    }, function(isNumber_1_1) {
      isNumber_1 = isNumber_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/rcoE3.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
        }
        break;
      case 1:
        {
          x = +(+a1 * b0 + a4 * b2 - a6 * b3 - a7 * b5);
        }
        break;
      case 2:
        {
          x = +(+a2 * b0 - a4 * b1 + a5 * b3 - a7 * b6);
        }
        break;
      case 3:
        {
          x = +(+a3 * b0 - a5 * b2 + a6 * b1 - a7 * b4);
        }
        break;
      case 4:
        {
          x = +(+a4 * b0 + a7 * b3);
        }
        break;
      case 5:
        {
          x = +(+a5 * b0 + a7 * b1);
        }
        break;
      case 6:
        {
          x = +(+a6 * b0 + a7 * b2);
        }
        break;
      case 7:
        {
          x = +(+a7 * b0);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
  }
  exports_1("default", rcoE3);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/rcoG3.js", ["../math/compG3Get", "../math/rcoE3", "../math/compG3Set"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var compG3Get_1,
      rcoE3_1,
      compG3Set_1;
  function rcoG3(a, b, out) {
    var a0 = compG3Get_1.default(a, 0);
    var a1 = compG3Get_1.default(a, 1);
    var a2 = compG3Get_1.default(a, 2);
    var a3 = compG3Get_1.default(a, 3);
    var a4 = compG3Get_1.default(a, 4);
    var a5 = compG3Get_1.default(a, 5);
    var a6 = compG3Get_1.default(a, 6);
    var a7 = compG3Get_1.default(a, 7);
    var b0 = compG3Get_1.default(b, 0);
    var b1 = compG3Get_1.default(b, 1);
    var b2 = compG3Get_1.default(b, 2);
    var b3 = compG3Get_1.default(b, 3);
    var b4 = compG3Get_1.default(b, 4);
    var b5 = compG3Get_1.default(b, 5);
    var b6 = compG3Get_1.default(b, 6);
    var b7 = compG3Get_1.default(b, 7);
    for (var i = 0; i < 8; i++) {
      compG3Set_1.default(out, i, rcoE3_1.default(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, i));
    }
    return out;
  }
  exports_1("default", rcoG3);
  return {
    setters: [function(compG3Get_1_1) {
      compG3Get_1 = compG3Get_1_1;
    }, function(rcoE3_1_1) {
      rcoE3_1 = rcoE3_1_1;
    }, function(compG3Set_1_1) {
      compG3Set_1 = compG3Set_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/compG3Get.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var COORD_W,
      COORD_X,
      COORD_Y,
      COORD_Z,
      COORD_XY,
      COORD_YZ,
      COORD_ZX,
      COORD_XYZ;
  function gcompE3(m, index) {
    switch (index) {
      case COORD_W:
        {
          return m.a;
        }
      case COORD_X:
        {
          return m.x;
        }
      case COORD_Y:
        {
          return m.y;
        }
      case COORD_Z:
        {
          return m.z;
        }
      case COORD_XY:
        {
          return m.xy;
        }
      case COORD_YZ:
        {
          return m.yz;
        }
      case COORD_ZX:
        {
          return m.zx;
        }
      case COORD_XYZ:
        {
          return m.b;
        }
      default:
        {
          throw new Error("index => " + index);
        }
    }
  }
  exports_1("default", gcompE3);
  return {
    setters: [],
    execute: function() {
      COORD_W = 0;
      COORD_X = 1;
      COORD_Y = 2;
      COORD_Z = 3;
      COORD_XY = 4;
      COORD_YZ = 5;
      COORD_ZX = 6;
      COORD_XYZ = 7;
    }
  };
});

System.register("davinci-units/math/mulE3.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, index) {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    a4 = +a4;
    a5 = +a5;
    a6 = +a6;
    a7 = +a7;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    b4 = +b4;
    b5 = +b5;
    b6 = +b6;
    b7 = +b7;
    index = index | 0;
    var x = 0.0;
    switch (~(~index)) {
      case 0:
        {
          x = +(a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3 - a4 * b4 - a5 * b5 - a6 * b6 - a7 * b7);
        }
        break;
      case 1:
        {
          x = +(a0 * b1 + a1 * b0 - a2 * b4 + a3 * b6 + a4 * b2 - a5 * b7 - a6 * b3 - a7 * b5);
        }
        break;
      case 2:
        {
          x = +(a0 * b2 + a1 * b4 + a2 * b0 - a3 * b5 - a4 * b1 + a5 * b3 - a6 * b7 - a7 * b6);
        }
        break;
      case 3:
        {
          x = +(a0 * b3 - a1 * b6 + a2 * b5 + a3 * b0 - a4 * b7 - a5 * b2 + a6 * b1 - a7 * b4);
        }
        break;
      case 4:
        {
          x = +(a0 * b4 + a1 * b2 - a2 * b1 + a3 * b7 + a4 * b0 - a5 * b6 + a6 * b5 + a7 * b3);
        }
        break;
      case 5:
        {
          x = +(a0 * b5 + a1 * b7 + a2 * b3 - a3 * b2 + a4 * b6 + a5 * b0 - a6 * b4 + a7 * b1);
        }
        break;
      case 6:
        {
          x = +(a0 * b6 - a1 * b3 + a2 * b7 + a3 * b1 - a4 * b5 + a5 * b4 + a6 * b0 + a7 * b2);
        }
        break;
      case 7:
        {
          x = +(a0 * b7 + a1 * b5 + a2 * b6 + a3 * b4 + a4 * b3 + a5 * b1 + a6 * b2 + a7 * b0);
        }
        break;
      default:
        {
          throw new Error("index must be in the range [0..7]");
        }
    }
    return +x;
  }
  exports_1("default", mulE3);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/math/compG3Set.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var COORD_W,
      COORD_X,
      COORD_Y,
      COORD_Z,
      COORD_XY,
      COORD_YZ,
      COORD_ZX,
      COORD_XYZ;
  function compG3Set(m, index, value) {
    switch (index) {
      case COORD_W:
        {
          m.a = value;
        }
        break;
      case COORD_X:
        {
          m.x = value;
        }
        break;
      case COORD_Y:
        {
          m.y = value;
        }
        break;
      case COORD_Z:
        {
          m.z = value;
        }
        break;
      case COORD_XY:
        {
          m.xy = value;
        }
        break;
      case COORD_YZ:
        {
          m.yz = value;
        }
        break;
      case COORD_ZX:
        {
          m.zx = value;
        }
        break;
      case COORD_XYZ:
        {
          m.b = value;
        }
        break;
      default:
        throw new Error("index => " + index);
    }
  }
  exports_1("default", compG3Set);
  return {
    setters: [],
    execute: function() {
      COORD_W = 0;
      COORD_X = 1;
      COORD_Y = 2;
      COORD_Z = 3;
      COORD_XY = 4;
      COORD_YZ = 5;
      COORD_ZX = 6;
      COORD_XYZ = 7;
    }
  };
});

System.register("davinci-units/math/scpG3.js", ["../math/compG3Get", "../math/mulE3", "../math/compG3Set"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var compG3Get_1,
      mulE3_1,
      compG3Set_1;
  function scpG3(a, b, out) {
    var a0 = compG3Get_1.default(a, 0);
    var a1 = compG3Get_1.default(a, 1);
    var a2 = compG3Get_1.default(a, 2);
    var a3 = compG3Get_1.default(a, 3);
    var a4 = compG3Get_1.default(a, 4);
    var a5 = compG3Get_1.default(a, 5);
    var a6 = compG3Get_1.default(a, 6);
    var a7 = compG3Get_1.default(a, 7);
    var b0 = compG3Get_1.default(b, 0);
    var b1 = compG3Get_1.default(b, 1);
    var b2 = compG3Get_1.default(b, 2);
    var b3 = compG3Get_1.default(b, 3);
    var b4 = compG3Get_1.default(b, 4);
    var b5 = compG3Get_1.default(b, 5);
    var b6 = compG3Get_1.default(b, 6);
    var b7 = compG3Get_1.default(b, 7);
    compG3Set_1.default(out, 0, mulE3_1.default(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0));
    compG3Set_1.default(out, 1, 0);
    compG3Set_1.default(out, 2, 0);
    compG3Set_1.default(out, 3, 0);
    compG3Set_1.default(out, 4, 0);
    compG3Set_1.default(out, 5, 0);
    compG3Set_1.default(out, 6, 0);
    compG3Set_1.default(out, 7, 0);
    return out;
  }
  exports_1("default", scpG3);
  return {
    setters: [function(compG3Get_1_1) {
      compG3Get_1 = compG3Get_1_1;
    }, function(mulE3_1_1) {
      mulE3_1 = mulE3_1_1;
    }, function(compG3Set_1_1) {
      compG3Set_1 = compG3Set_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/squaredNormG3.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function squaredNormG3(m) {
    var a = m.a;
    var x = m.x;
    var y = m.y;
    var z = m.z;
    var yz = m.yz;
    var zx = m.zx;
    var xy = m.xy;
    var b = m.b;
    return a * a + x * x + y * y + z * z + yz * yz + zx * zx + xy * xy + b * b;
  }
  exports_1("default", squaredNormG3);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/checks/isDefined.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function isDefined(arg) {
    return (typeof arg !== 'undefined');
  }
  exports_1("default", isDefined);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/checks/isArray.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function isArray(x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  }
  exports_1("default", isArray);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/checks/mustBeArray.js", ["../checks/mustSatisfy", "../checks/isArray"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustSatisfy_1,
      isArray_1;
  function beAnArray() {
    return "be an array";
  }
  function default_1(name, value, contextBuilder) {
    mustSatisfy_1.default(name, isArray_1.default(value), beAnArray, contextBuilder);
    return value;
  }
  exports_1("default", default_1);
  return {
    setters: [function(mustSatisfy_1_1) {
      mustSatisfy_1 = mustSatisfy_1_1;
    }, function(isArray_1_1) {
      isArray_1 = isArray_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/stringFromCoordinates.js", ["../checks/isDefined", "../checks/mustBeArray"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var isDefined_1,
      mustBeArray_1;
  function isLabelOne(label) {
    if (typeof label === 'string') {
      return label === "1";
    } else {
      var labels = mustBeArray_1.default('label', label);
      if (labels.length === 2) {
        return isLabelOne(labels[0]) && isLabelOne(labels[1]);
      } else if (labels.length === 1) {
        return isLabelOne(labels[0]);
      } else {
        return false;
      }
    }
  }
  function appendLabel(coord, label, sb) {
    if (typeof label === 'string') {
      sb.push(label);
    } else {
      var labels = mustBeArray_1.default('label', label);
      if (labels.length === 2) {
        sb.push(coord > 0 ? labels[1] : labels[0]);
      } else if (labels.length === 1) {
        sb.push(labels[0]);
      } else if (labels.length === 0) {} else {
        throw new Error("Unexpected basis label array length: " + labels.length);
      }
    }
  }
  function appendCoord(coord, numberToString, label, sb) {
    if (coord !== 0) {
      if (coord >= 0) {
        if (sb.length > 0) {
          sb.push("+");
        }
      } else {
        if (typeof label === 'string') {
          sb.push("-");
        } else {
          var labels = mustBeArray_1.default('label', label);
          if (labels.length === 2) {
            if (labels[0] !== labels[1]) {
              if (sb.length > 0) {
                sb.push("+");
              }
            } else {
              sb.push("-");
            }
          } else if (labels.length === 1) {
            sb.push("-");
          } else {
            sb.push("-");
          }
        }
      }
      var n = Math.abs(coord);
      if (n === 1) {
        appendLabel(coord, label, sb);
      } else {
        sb.push(numberToString(n));
        if (!isLabelOne(label)) {
          sb.push("*");
          appendLabel(coord, label, sb);
        } else {}
      }
    } else {}
  }
  function stringFromCoordinates(coordinates, numberToString, labels) {
    var sb = [];
    for (var i = 0,
        iLength = coordinates.length; i < iLength; i++) {
      var coord = coordinates[i];
      if (isDefined_1.default(coord)) {
        appendCoord(coord, numberToString, labels[i], sb);
      } else {
        return void 0;
      }
    }
    return sb.length > 0 ? sb.join("") : "0";
  }
  exports_1("default", stringFromCoordinates);
  return {
    setters: [function(isDefined_1_1) {
      isDefined_1 = isDefined_1_1;
    }, function(mustBeArray_1_1) {
      mustBeArray_1 = mustBeArray_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/BASIS_LABELS_G3_GEOMETRIC.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var SCALAR_POS_SYMBOL,
      E1_NEG_SYMBOL,
      E1_POS_SYMBOL,
      E2_POS_SYMBOL,
      E2_NEG_SYMBOL,
      E3_POS_SYMBOL,
      E3_NEG_SYMBOL,
      E12_NEG_SYMBOL,
      E12_POS_SYMBOL,
      E31_POS_SYMBOL,
      E31_NEG_SYMBOL,
      E23_NEG_SYMBOL,
      E23_POS_SYMBOL,
      PSEUDO_POS_SYMBOL,
      PSEUDO_NEG_SYMBOL,
      BASIS_LABELS_G3_GEOMETRIC;
  return {
    setters: [],
    execute: function() {
      SCALAR_POS_SYMBOL = "1";
      E1_NEG_SYMBOL = "←";
      E1_POS_SYMBOL = "→";
      E2_POS_SYMBOL = "↑";
      E2_NEG_SYMBOL = "↓";
      E3_POS_SYMBOL = "⊙";
      E3_NEG_SYMBOL = "⊗";
      E12_NEG_SYMBOL = "↻";
      E12_POS_SYMBOL = "↺";
      E31_POS_SYMBOL = "⊶";
      E31_NEG_SYMBOL = "⊷";
      E23_NEG_SYMBOL = "⬘";
      E23_POS_SYMBOL = "⬙";
      PSEUDO_POS_SYMBOL = "☐";
      PSEUDO_NEG_SYMBOL = "■";
      BASIS_LABELS_G3_GEOMETRIC = [[SCALAR_POS_SYMBOL, SCALAR_POS_SYMBOL], [E1_NEG_SYMBOL, E1_POS_SYMBOL], [E2_NEG_SYMBOL, E2_POS_SYMBOL], [E3_NEG_SYMBOL, E3_POS_SYMBOL], [E12_NEG_SYMBOL, E12_POS_SYMBOL], [E23_NEG_SYMBOL, E23_POS_SYMBOL], [E31_NEG_SYMBOL, E31_POS_SYMBOL], [PSEUDO_NEG_SYMBOL, PSEUDO_POS_SYMBOL]];
      exports_1("default", BASIS_LABELS_G3_GEOMETRIC);
    }
  };
});

System.register("davinci-units/math/BASIS_LABELS_G3_HAMILTON.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var SCALAR_SYMBOL,
      E1_SYMBOL,
      E2_SYMBOL,
      E3_SYMBOL,
      E12_SYMBOL,
      E23_SYMBOL,
      E31_SYMBOL,
      PSEUDO_SYMBOL,
      BASIS_LABELS_G3_HAMILTON;
  return {
    setters: [],
    execute: function() {
      SCALAR_SYMBOL = "1";
      E1_SYMBOL = "i";
      E2_SYMBOL = "j";
      E3_SYMBOL = "k";
      E12_SYMBOL = "ij";
      E23_SYMBOL = "jk";
      E31_SYMBOL = "ki";
      PSEUDO_SYMBOL = "ijk";
      BASIS_LABELS_G3_HAMILTON = [[SCALAR_SYMBOL], [E1_SYMBOL], [E2_SYMBOL], [E3_SYMBOL], [E12_SYMBOL], [E23_SYMBOL], [E31_SYMBOL], [PSEUDO_SYMBOL]];
      exports_1("default", BASIS_LABELS_G3_HAMILTON);
    }
  };
});

System.register("davinci-units/math/BASIS_LABELS_G3_STANDARD.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var SCALAR_SYMBOL,
      E1_SYMBOL,
      E2_SYMBOL,
      E3_SYMBOL,
      E12_SYMBOL,
      E23_SYMBOL,
      E31_SYMBOL,
      PSEUDO_SYMBOL,
      BASIS_LABELS_G3_STANDARD;
  return {
    setters: [],
    execute: function() {
      SCALAR_SYMBOL = "1";
      E1_SYMBOL = "e1";
      E2_SYMBOL = "e2";
      E3_SYMBOL = "e3";
      E12_SYMBOL = "e12";
      E23_SYMBOL = "e23";
      E31_SYMBOL = "e31";
      PSEUDO_SYMBOL = "I";
      BASIS_LABELS_G3_STANDARD = [[SCALAR_SYMBOL], [E1_SYMBOL], [E2_SYMBOL], [E3_SYMBOL], [E12_SYMBOL], [E23_SYMBOL], [E31_SYMBOL], [PSEUDO_SYMBOL]];
      exports_1("default", BASIS_LABELS_G3_STANDARD);
    }
  };
});

System.register("davinci-units/math/BASIS_LABELS_G3_STANDARD_HTML.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var SCALAR_SYMBOL,
      E1_SYMBOL,
      E2_SYMBOL,
      E3_SYMBOL,
      E12_SYMBOL,
      E23_SYMBOL,
      E31_SYMBOL,
      PSEUDO_SYMBOL,
      BASIS_LABELS_G3_STANDARD_HTML;
  return {
    setters: [],
    execute: function() {
      SCALAR_SYMBOL = "1";
      E1_SYMBOL = "<b>e</b><sub>1</sub>";
      E2_SYMBOL = "<b>e</b><sub>2</sub>";
      E3_SYMBOL = "<b>e</b><sub>3</sub>";
      E12_SYMBOL = E1_SYMBOL + E2_SYMBOL;
      E23_SYMBOL = E2_SYMBOL + E3_SYMBOL;
      E31_SYMBOL = E3_SYMBOL + E1_SYMBOL;
      PSEUDO_SYMBOL = E1_SYMBOL + E2_SYMBOL + E3_SYMBOL;
      BASIS_LABELS_G3_STANDARD_HTML = [[SCALAR_SYMBOL], [E1_SYMBOL], [E2_SYMBOL], [E3_SYMBOL], [E12_SYMBOL], [E23_SYMBOL], [E31_SYMBOL], [PSEUDO_SYMBOL]];
      exports_1("default", BASIS_LABELS_G3_STANDARD_HTML);
    }
  };
});

System.register("davinci-units/math/G3.js", ["./bezier2", "./bezier3", "./extG3", "./gauss", "./lcoG3", "./mulG3", "../i18n/notImplemented", "../i18n/notSupported", "./quadSpinorE3", "../i18n/readOnly", "./rcoG3", "./scpG3", "./squaredNormG3", "./stringFromCoordinates", "./Unit", "./BASIS_LABELS_G3_GEOMETRIC", "./BASIS_LABELS_G3_HAMILTON", "./BASIS_LABELS_G3_STANDARD", "./BASIS_LABELS_G3_STANDARD_HTML"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var bezier2_1,
      bezier3_1,
      extG3_1,
      gauss_1,
      lcoG3_1,
      mulG3_1,
      notImplemented_1,
      notSupported_1,
      quadSpinorE3_1,
      readOnly_1,
      rcoG3_1,
      scpG3_1,
      squaredNormG3_1,
      stringFromCoordinates_1,
      Unit_1,
      BASIS_LABELS_G3_GEOMETRIC_1,
      BASIS_LABELS_G3_HAMILTON_1,
      BASIS_LABELS_G3_STANDARD_1,
      BASIS_LABELS_G3_STANDARD_HTML_1;
  var COORD_SCALAR,
      COORD_X,
      COORD_Y,
      COORD_Z,
      COORD_XY,
      COORD_YZ,
      COORD_ZX,
      COORD_PSEUDO,
      G3;
  return {
    setters: [function(bezier2_1_1) {
      bezier2_1 = bezier2_1_1;
    }, function(bezier3_1_1) {
      bezier3_1 = bezier3_1_1;
    }, function(extG3_1_1) {
      extG3_1 = extG3_1_1;
    }, function(gauss_1_1) {
      gauss_1 = gauss_1_1;
    }, function(lcoG3_1_1) {
      lcoG3_1 = lcoG3_1_1;
    }, function(mulG3_1_1) {
      mulG3_1 = mulG3_1_1;
    }, function(notImplemented_1_1) {
      notImplemented_1 = notImplemented_1_1;
    }, function(notSupported_1_1) {
      notSupported_1 = notSupported_1_1;
    }, function(quadSpinorE3_1_1) {
      quadSpinorE3_1 = quadSpinorE3_1_1;
    }, function(readOnly_1_1) {
      readOnly_1 = readOnly_1_1;
    }, function(rcoG3_1_1) {
      rcoG3_1 = rcoG3_1_1;
    }, function(scpG3_1_1) {
      scpG3_1 = scpG3_1_1;
    }, function(squaredNormG3_1_1) {
      squaredNormG3_1 = squaredNormG3_1_1;
    }, function(stringFromCoordinates_1_1) {
      stringFromCoordinates_1 = stringFromCoordinates_1_1;
    }, function(Unit_1_1) {
      Unit_1 = Unit_1_1;
    }, function(BASIS_LABELS_G3_GEOMETRIC_1_1) {
      BASIS_LABELS_G3_GEOMETRIC_1 = BASIS_LABELS_G3_GEOMETRIC_1_1;
    }, function(BASIS_LABELS_G3_HAMILTON_1_1) {
      BASIS_LABELS_G3_HAMILTON_1 = BASIS_LABELS_G3_HAMILTON_1_1;
    }, function(BASIS_LABELS_G3_STANDARD_1_1) {
      BASIS_LABELS_G3_STANDARD_1 = BASIS_LABELS_G3_STANDARD_1_1;
    }, function(BASIS_LABELS_G3_STANDARD_HTML_1_1) {
      BASIS_LABELS_G3_STANDARD_HTML_1 = BASIS_LABELS_G3_STANDARD_HTML_1_1;
    }],
    execute: function() {
      COORD_SCALAR = 0;
      COORD_X = 1;
      COORD_Y = 2;
      COORD_Z = 3;
      COORD_XY = 4;
      COORD_YZ = 5;
      COORD_ZX = 6;
      COORD_PSEUDO = 7;
      G3 = (function() {
        function G3(α, x, y, z, xy, yz, zx, β, uom) {
          this._coords = [0, 0, 0, 0, 0, 0, 0, 0];
          this._coords[COORD_SCALAR] = α;
          this._coords[COORD_X] = x;
          this._coords[COORD_Y] = y;
          this._coords[COORD_Z] = z;
          this._coords[COORD_XY] = xy;
          this._coords[COORD_YZ] = yz;
          this._coords[COORD_ZX] = zx;
          this._coords[COORD_PSEUDO] = β;
          this.uom = uom;
          if (this.uom && this.uom.multiplier !== 1) {
            var multiplier = this.uom.multiplier;
            this._coords[COORD_SCALAR] *= multiplier;
            this._coords[COORD_X] *= multiplier;
            this._coords[COORD_Y] *= multiplier;
            this._coords[COORD_Z] *= multiplier;
            this._coords[COORD_XY] *= multiplier;
            this._coords[COORD_YZ] *= multiplier;
            this._coords[COORD_ZX] *= multiplier;
            this._coords[COORD_PSEUDO] *= multiplier;
            this.uom = new Unit_1.Unit(1, uom.dimensions, uom.labels);
          }
        }
        Object.defineProperty(G3, "BASIS_LABELS_GEOMETRIC", {
          get: function() {
            return BASIS_LABELS_G3_GEOMETRIC_1.default;
          },
          enumerable: true,
          configurable: true
        });
        ;
        Object.defineProperty(G3, "BASIS_LABELS_HAMILTON", {
          get: function() {
            return BASIS_LABELS_G3_HAMILTON_1.default;
          },
          enumerable: true,
          configurable: true
        });
        ;
        Object.defineProperty(G3, "BASIS_LABELS_STANDARD", {
          get: function() {
            return BASIS_LABELS_G3_STANDARD_1.default;
          },
          enumerable: true,
          configurable: true
        });
        ;
        Object.defineProperty(G3, "BASIS_LABELS_STANDARD_HTML", {
          get: function() {
            return BASIS_LABELS_G3_STANDARD_HTML_1.default;
          },
          enumerable: true,
          configurable: true
        });
        ;
        Object.defineProperty(G3.prototype, "a", {
          get: function() {
            return this._coords[COORD_SCALAR];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('a').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "x", {
          get: function() {
            return this._coords[COORD_X];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('x').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "y", {
          get: function() {
            return this._coords[COORD_Y];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('y').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "z", {
          get: function() {
            return this._coords[COORD_Z];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('z').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "xy", {
          get: function() {
            return this._coords[COORD_XY];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('xy').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "yz", {
          get: function() {
            return this._coords[COORD_YZ];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('yz').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "zx", {
          get: function() {
            return this._coords[COORD_ZX];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('zx').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(G3.prototype, "b", {
          get: function() {
            return this._coords[COORD_PSEUDO];
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('b').message);
          },
          enumerable: true,
          configurable: true
        });
        G3.fromCartesian = function(α, x, y, z, xy, yz, zx, β, uom) {
          return new G3(α, x, y, z, xy, yz, zx, β, uom);
        };
        Object.defineProperty(G3.prototype, "coords", {
          get: function() {
            return [this.a, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b];
          },
          enumerable: true,
          configurable: true
        });
        G3.prototype.coordinate = function(index) {
          switch (index) {
            case 0:
              return this.a;
            case 1:
              return this.x;
            case 2:
              return this.y;
            case 3:
              return this.z;
            case 4:
              return this.xy;
            case 5:
              return this.yz;
            case 6:
              return this.zx;
            case 7:
              return this.b;
            default:
              throw new Error("index must be in the range [0..7]");
          }
        };
        G3.prototype.add = function(rhs) {
          var a = this.a + rhs.a;
          var x = this.x + rhs.x;
          var y = this.y + rhs.y;
          var z = this.z + rhs.z;
          var xy = this.xy + rhs.xy;
          var yz = this.yz + rhs.yz;
          var zx = this.zx + rhs.zx;
          var b = this.b + rhs.b;
          var uom = Unit_1.Unit.compatible(this.uom, rhs.uom);
          return new G3(a, x, y, z, xy, yz, zx, b, uom);
        };
        G3.prototype.addPseudo = function(β) {
          return new G3(this.a, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b + β.multiplier, Unit_1.Unit.compatible(this.uom, β));
        };
        G3.prototype.addScalar = function(α) {
          return new G3(this.a + α.multiplier, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b, Unit_1.Unit.compatible(this.uom, α));
        };
        G3.prototype.__add__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.add(rhs);
          } else if (rhs instanceof Unit_1.Unit) {
            return this.addScalar(rhs);
          }
        };
        G3.prototype.__radd__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.add(this);
          } else if (lhs instanceof Unit_1.Unit) {
            return this.addScalar(lhs);
          }
        };
        G3.prototype.adj = function() {
          throw new Error(notImplemented_1.default('adj').message);
        };
        G3.prototype.angle = function() {
          return this.log().grade(2);
        };
        G3.prototype.conj = function() {
          return new G3(this.a, -this.x, -this.y, -this.z, -this.xy, -this.yz, -this.zx, +this.b, this.uom);
        };
        G3.prototype.cubicBezier = function(t, controlBegin, controlEnd, endPoint) {
          var a = bezier3_1.default(t, this.a, controlBegin.a, controlEnd.a, endPoint.a);
          var x = bezier3_1.default(t, this.x, controlBegin.x, controlEnd.x, endPoint.x);
          var y = bezier3_1.default(t, this.y, controlBegin.y, controlEnd.y, endPoint.y);
          var z = bezier3_1.default(t, this.z, controlBegin.z, controlEnd.z, endPoint.z);
          var b = bezier3_1.default(t, this.b, controlBegin.b, controlEnd.b, endPoint.b);
          return new G3(a, x, y, z, 0, 0, 0, b, this.uom);
        };
        G3.prototype.direction = function() {
          return this.div(this.norm());
        };
        G3.prototype.sub = function(rhs) {
          var a = this.a - rhs.a;
          var x = this.x - rhs.x;
          var y = this.y - rhs.y;
          var z = this.z - rhs.z;
          var xy = this.xy - rhs.xy;
          var yz = this.yz - rhs.yz;
          var zx = this.zx - rhs.zx;
          var b = this.b - rhs.b;
          var uom = Unit_1.Unit.compatible(this.uom, rhs.uom);
          return new G3(a, x, y, z, xy, yz, zx, b, uom);
        };
        G3.prototype.__sub__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.sub(rhs);
          } else if (rhs instanceof Unit_1.Unit) {
            return this.addScalar(rhs.neg());
          }
        };
        G3.prototype.__rsub__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.sub(this);
          } else if (lhs instanceof Unit_1.Unit) {
            return this.neg().addScalar(lhs);
          }
        };
        G3.prototype.mul = function(rhs) {
          var out = new G3(0, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, rhs.uom));
          mulG3_1.default(this, rhs, out._coords);
          return out;
        };
        G3.prototype.__mul__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.mul(rhs);
          } else if (typeof rhs === 'number') {
            return this.scale(rhs);
          }
        };
        G3.prototype.__rmul__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.mul(this);
          } else if (typeof lhs === 'number') {
            return this.scale(lhs);
          }
        };
        G3.prototype.scale = function(α) {
          return new G3(this.a * α, this.x * α, this.y * α, this.z * α, this.xy * α, this.yz * α, this.zx * α, this.b * α, this.uom);
        };
        G3.prototype.div = function(rhs) {
          return this.mul(rhs.inv());
        };
        G3.prototype.divByScalar = function(α) {
          return new G3(this.a / α, this.x / α, this.y / α, this.z / α, this.xy / α, this.yz / α, this.zx / α, this.b / α, this.uom);
        };
        G3.prototype.__div__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.div(rhs);
          } else if (typeof rhs === 'number') {
            return this.divByScalar(rhs);
          }
        };
        G3.prototype.__rdiv__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.div(this);
          } else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).div(this);
          }
        };
        G3.prototype.dual = function() {
          throw new Error(notImplemented_1.default('dual').message);
        };
        G3.prototype.scp = function(rhs) {
          var out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, rhs.uom));
          scpG3_1.default(this, rhs, G3.mutator(out));
          return out;
        };
        G3.prototype.ext = function(rhs) {
          var out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, rhs.uom));
          extG3_1.default(this, rhs, G3.mutator(out));
          return out;
        };
        G3.prototype.__vbar__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.scp(rhs);
          } else if (typeof rhs === 'number') {
            return this.scp(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
          }
        };
        G3.prototype.__rvbar__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.scp(this);
          } else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).scp(this);
          }
        };
        G3.prototype.__wedge__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.ext(rhs);
          } else if (typeof rhs === 'number') {
            return this.scale(rhs);
          }
        };
        G3.prototype.__rwedge__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.ext(this);
          } else if (typeof lhs === 'number') {
            return this.scale(lhs);
          }
        };
        G3.prototype.lco = function(rhs) {
          var out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, rhs.uom));
          lcoG3_1.default(this, rhs, G3.mutator(out));
          return out;
        };
        G3.prototype.__lshift__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.lco(rhs);
          } else if (typeof rhs === 'number') {
            return this.lco(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
          }
        };
        G3.prototype.__rlshift__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.lco(this);
          } else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).lco(this);
          }
        };
        G3.prototype.rco = function(rhs) {
          var out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, rhs.uom));
          rcoG3_1.default(this, rhs, G3.mutator(out));
          return out;
        };
        G3.prototype.__rshift__ = function(rhs) {
          if (rhs instanceof G3) {
            return this.rco(rhs);
          } else if (typeof rhs === 'number') {
            return this.rco(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
          }
        };
        G3.prototype.__rrshift__ = function(lhs) {
          if (lhs instanceof G3) {
            return lhs.rco(this);
          } else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).rco(this);
          }
        };
        G3.prototype.pow = function(exponent) {
          throw new Error('pow');
        };
        G3.prototype.__bang__ = function() {
          return this.inv();
        };
        G3.prototype.__pos__ = function() {
          return this;
        };
        G3.prototype.neg = function() {
          return new G3(-this.a, -this.x, -this.y, -this.z, -this.xy, -this.yz, -this.zx, -this.b, this.uom);
        };
        G3.prototype.__neg__ = function() {
          return this.neg();
        };
        G3.prototype.rev = function() {
          return new G3(this.a, this.x, this.y, this.z, -this.xy, -this.yz, -this.zx, -this.b, this.uom);
        };
        G3.prototype.__tilde__ = function() {
          return this.rev();
        };
        G3.prototype.grade = function(grade) {
          switch (grade) {
            case 0:
              return G3.fromCartesian(this.a, 0, 0, 0, 0, 0, 0, 0, this.uom);
            case 1:
              return G3.fromCartesian(0, this.x, this.y, this.z, 0, 0, 0, 0, this.uom);
            case 2:
              return G3.fromCartesian(0, 0, 0, 0, this.xy, this.yz, this.zx, 0, this.uom);
            case 3:
              return G3.fromCartesian(0, 0, 0, 0, 0, 0, 0, this.b, this.uom);
            default:
              return G3.fromCartesian(0, 0, 0, 0, 0, 0, 0, 0, this.uom);
          }
        };
        G3.prototype.cross = function(vector) {
          var x;
          var x2;
          var y;
          var y1;
          var y2;
          var z;
          var z1;
          var z2;
          var x1 = this.x;
          y1 = this.y;
          z1 = this.z;
          x2 = vector.x;
          y2 = vector.y;
          z2 = vector.z;
          x = y1 * z2 - z1 * y2;
          y = z1 * x2 - x1 * z2;
          z = x1 * y2 - y1 * x2;
          return new G3(0, x, y, z, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, vector.uom));
        };
        G3.prototype.isOne = function() {
          return (this.a === 1) && (this.x === 0) && (this.y === 0) && (this.z === 0) && (this.yz === 0) && (this.zx === 0) && (this.xy === 0) && (this.b === 0);
        };
        G3.prototype.isZero = function() {
          return (this.a === 0) && (this.x === 0) && (this.y === 0) && (this.z === 0) && (this.yz === 0) && (this.zx === 0) && (this.xy === 0) && (this.b === 0);
        };
        G3.prototype.lerp = function(target, α) {
          throw new Error(notImplemented_1.default('lerp').message);
        };
        G3.prototype.cos = function() {
          Unit_1.Unit.assertDimensionless(this.uom);
          var cosW = Math.cos(this.a);
          return new G3(cosW, 0, 0, 0, 0, 0, 0, 0);
        };
        G3.prototype.cosh = function() {
          throw new Error(notImplemented_1.default('cosh').message);
        };
        G3.prototype.distanceTo = function(point) {
          var dx = this.x - point.x;
          var dy = this.y - point.y;
          var dz = this.z - point.z;
          return Math.sqrt(dx * dx + dy * dy + dz * dz);
        };
        G3.prototype.equals = function(other) {
          if (this.a === other.a && this.x === other.x && this.y === other.y && this.z === other.z && this.xy === other.xy && this.yz === other.yz && this.zx === other.zx && this.b === other.b) {
            if (this.uom) {
              if (other.uom) {
                return true;
              } else {
                return false;
              }
            } else {
              if (other.uom) {
                return false;
              } else {
                return true;
              }
            }
          } else {
            return false;
          }
        };
        G3.prototype.exp = function() {
          Unit_1.Unit.assertDimensionless(this.uom);
          var bivector = this.grade(2);
          var a = bivector.norm();
          if (!a.isZero()) {
            var c = a.cos();
            var s = a.sin();
            var B = bivector.direction();
            return c.add(B.mul(s));
          } else {
            return new G3(1, 0, 0, 0, 0, 0, 0, 0, this.uom);
          }
        };
        G3.prototype.inv = function() {
          var α = this.a;
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var xy = this.xy;
          var yz = this.yz;
          var zx = this.zx;
          var β = this.b;
          var A = [[α, x, y, z, -xy, -yz, -zx, -β], [x, α, xy, -zx, -y, -β, z, -yz], [y, -xy, α, yz, x, -z, -β, -zx], [z, zx, -yz, α, -β, y, -x, -xy], [xy, -y, x, β, α, zx, -yz, z], [yz, β, -z, y, -zx, α, xy, x], [zx, z, β, -x, yz, -xy, α, y], [β, yz, zx, xy, z, x, y, α]];
          var b = [1, 0, 0, 0, 0, 0, 0, 0];
          var X = gauss_1.default(A, b);
          var uom = this.uom ? this.uom.inv() : void 0;
          return new G3(X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7], uom);
        };
        G3.prototype.log = function() {
          throw new Error(notImplemented_1.default('log').message);
        };
        G3.prototype.magnitude = function() {
          return this.norm();
        };
        G3.prototype.magnitudeSansUnits = function() {
          return Math.sqrt(this.squaredNormSansUnits());
        };
        G3.prototype.norm = function() {
          return new G3(this.magnitudeSansUnits(), 0, 0, 0, 0, 0, 0, 0, this.uom);
        };
        G3.prototype.quad = function() {
          return this.squaredNorm();
        };
        G3.prototype.quadraticBezier = function(t, controlPoint, endPoint) {
          var x = bezier2_1.default(t, this.x, controlPoint.x, endPoint.x);
          var y = bezier2_1.default(t, this.y, controlPoint.y, endPoint.y);
          var z = bezier2_1.default(t, this.z, controlPoint.z, endPoint.z);
          return new G3(0, x, y, z, 0, 0, 0, 0, this.uom);
        };
        G3.prototype.squaredNorm = function() {
          return new G3(this.squaredNormSansUnits(), 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.mul(this.uom, this.uom));
        };
        G3.prototype.squaredNormSansUnits = function() {
          return squaredNormG3_1.default(this);
        };
        G3.prototype.stress = function(σ) {
          throw new Error(notSupported_1.default('stress').message);
        };
        G3.prototype.reflect = function(n) {
          var m = G3.fromVector(n);
          return m.mul(this).mul(m).scale(-1);
        };
        G3.prototype.rotate = function(R) {
          var x = this.x;
          var y = this.y;
          var z = this.z;
          var a = R.xy;
          var b = R.yz;
          var c = R.zx;
          var α = R.a;
          var quadR = quadSpinorE3_1.default(R);
          var ix = α * x - c * z + a * y;
          var iy = α * y - a * x + b * z;
          var iz = α * z - b * y + c * x;
          var iα = b * x + c * y + a * z;
          var αOut = quadR * this.a;
          var xOut = ix * α + iα * b + iy * a - iz * c;
          var yOut = iy * α + iα * c + iz * b - ix * a;
          var zOut = iz * α + iα * a + ix * c - iy * b;
          var βOut = quadR * this.b;
          return G3.fromCartesian(αOut, xOut, yOut, zOut, 0, 0, 0, βOut, this.uom);
        };
        G3.prototype.sin = function() {
          Unit_1.Unit.assertDimensionless(this.uom);
          var sinW = Math.sin(this.a);
          return new G3(sinW, 0, 0, 0, 0, 0, 0, 0, void 0);
        };
        G3.prototype.sinh = function() {
          throw new Error(notImplemented_1.default('sinh').message);
        };
        G3.prototype.slerp = function(target, α) {
          throw new Error(notImplemented_1.default('slerp').message);
        };
        G3.prototype.sqrt = function() {
          return new G3(Math.sqrt(this.a), 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.sqrt(this.uom));
        };
        G3.prototype.tan = function() {
          return this.sin().div(this.cos());
        };
        G3.prototype.toStringCustom = function(coordToString, labels) {
          var quantityString = stringFromCoordinates_1.default(this.coords, coordToString, labels);
          if (this.uom) {
            var unitString = this.uom.toString().trim();
            if (unitString) {
              return quantityString + ' ' + unitString;
            } else {
              return quantityString;
            }
          } else {
            return quantityString;
          }
        };
        G3.prototype.toExponential = function(fractionDigits) {
          var coordToString = function(coord) {
            return coord.toExponential(fractionDigits);
          };
          return this.toStringCustom(coordToString, G3.BASIS_LABELS);
        };
        G3.prototype.toFixed = function(fractionDigits) {
          var coordToString = function(coord) {
            return coord.toFixed(fractionDigits);
          };
          return this.toStringCustom(coordToString, G3.BASIS_LABELS);
        };
        G3.prototype.toPrecision = function(precision) {
          var coordToString = function(coord) {
            return coord.toPrecision(precision);
          };
          return this.toStringCustom(coordToString, G3.BASIS_LABELS);
        };
        G3.prototype.toString = function(radix) {
          var coordToString = function(coord) {
            return coord.toString(radix);
          };
          return this.toStringCustom(coordToString, G3.BASIS_LABELS);
        };
        G3.mutator = function(M) {
          var that = {
            set a(value) {
              M._coords[COORD_SCALAR] = value;
            },
            set x(value) {
              M._coords[COORD_X] = value;
            },
            set y(value) {
              M._coords[COORD_Y] = value;
            },
            set z(value) {
              M._coords[COORD_Z] = value;
            },
            set yz(value) {
              M._coords[COORD_YZ] = value;
            },
            set zx(value) {
              M._coords[COORD_ZX] = value;
            },
            set xy(value) {
              M._coords[COORD_XY] = value;
            },
            set b(value) {
              M._coords[COORD_PSEUDO] = value;
            }
          };
          return that;
        };
        G3.copy = function(m, uom) {
          return new G3(m.a, m.x, m.y, m.z, m.xy, m.yz, m.zx, m.b, uom);
        };
        G3.direction = function(vector) {
          if (vector) {
            return new G3(0, vector.x, vector.y, vector.z, 0, 0, 0, 0).direction();
          } else {
            return void 0;
          }
        };
        G3.fromSpinor = function(spinor) {
          if (spinor) {
            return new G3(spinor.a, 0, 0, 0, spinor.xy, spinor.yz, spinor.zx, 0, void 0);
          } else {
            return void 0;
          }
        };
        G3.fromVector = function(vector, uom) {
          if (vector) {
            return new G3(0, vector.x, vector.y, vector.z, 0, 0, 0, 0, uom);
          } else {
            return void 0;
          }
        };
        G3.random = function(uom) {
          return new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), uom);
        };
        G3.scalar = function(α, uom) {
          return new G3(α, 0, 0, 0, 0, 0, 0, 0, uom);
        };
        G3.vector = function(x, y, z, uom) {
          return new G3(0, x, y, z, 0, 0, 0, 0, uom);
        };
        G3.BASIS_LABELS = BASIS_LABELS_G3_STANDARD_1.default;
        G3.zero = new G3(0, 0, 0, 0, 0, 0, 0, 0);
        G3.one = new G3(1, 0, 0, 0, 0, 0, 0, 0);
        G3.e1 = new G3(0, 1, 0, 0, 0, 0, 0, 0);
        G3.e2 = new G3(0, 0, 1, 0, 0, 0, 0, 0);
        G3.e3 = new G3(0, 0, 0, 1, 0, 0, 0, 0);
        G3.kilogram = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.KILOGRAM);
        G3.meter = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.METER);
        G3.second = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.SECOND);
        G3.coulomb = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.COULOMB);
        G3.ampere = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.AMPERE);
        G3.kelvin = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.KELVIN);
        G3.mole = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.MOLE);
        G3.candela = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit_1.Unit.CANDELA);
        return G3;
      }());
      exports_1("default", G3);
    }
  };
});

System.register("davinci-units/math/mathcore.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var abs,
      acos,
      asin,
      atan,
      cos,
      exp,
      log,
      sin,
      sqrt,
      tan,
      mathcore;
  function isCallableMethod(x, name) {
    return (x !== null) && (typeof x === 'object') && (typeof x[name] === 'function');
  }
  function makeUnaryUniversalFunction(methodName, primitiveFunction) {
    return function(x) {
      var something = x;
      if (isCallableMethod(x, methodName)) {
        return something[methodName]();
      } else if (typeof x === 'number') {
        var n = something;
        var thing = primitiveFunction(n);
        return thing;
      } else {
        throw new TypeError("x must support " + methodName + "(x)");
      }
    };
  }
  function cosh(x) {
    return (exp(x) + exp(-x)) / 2;
  }
  function sinh(x) {
    return (exp(x) - exp(-x)) / 2;
  }
  function tanh(x) {
    return sinh(x) / cosh(x);
  }
  function quad(x) {
    return x * x;
  }
  return {
    setters: [],
    execute: function() {
      abs = Math.abs;
      acos = Math.acos;
      asin = Math.asin;
      atan = Math.atan;
      cos = Math.cos;
      exp = Math.exp;
      log = Math.log;
      sin = Math.sin;
      sqrt = Math.sqrt;
      tan = Math.tan;
      mathcore = {
        acos: makeUnaryUniversalFunction('acos', acos),
        asin: makeUnaryUniversalFunction('asin', asin),
        atan: makeUnaryUniversalFunction('atan', atan),
        cos: makeUnaryUniversalFunction('cos', cos),
        cosh: makeUnaryUniversalFunction('cosh', cosh),
        exp: makeUnaryUniversalFunction('exp', exp),
        log: makeUnaryUniversalFunction('log', log),
        norm: makeUnaryUniversalFunction('norm', abs),
        quad: makeUnaryUniversalFunction('quad', quad),
        sin: makeUnaryUniversalFunction('sin', sin),
        sinh: makeUnaryUniversalFunction('sinh', sinh),
        sqrt: makeUnaryUniversalFunction('sqrt', sqrt),
        tan: makeUnaryUniversalFunction('tan', tan),
        tanh: makeUnaryUniversalFunction('tanh', tanh),
        Math: {
          cosh: cosh,
          sinh: sinh
        }
      };
      exports_1("default", mathcore);
    }
  };
});

System.register("davinci-units/checks/isNumber.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function isNumber(x) {
    return (typeof x === 'number');
  }
  exports_1("default", isNumber);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/checks/isInteger.js", ["../checks/isNumber"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var isNumber_1;
  function isInteger(x) {
    return isNumber_1.default(x) && x % 1 === 0;
  }
  exports_1("default", isInteger);
  return {
    setters: [function(isNumber_1_1) {
      isNumber_1 = isNumber_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/checks/mustBeInteger.js", ["../checks/mustSatisfy", "../checks/isInteger"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustSatisfy_1,
      isInteger_1;
  function beAnInteger() {
    return "be an integer";
  }
  function mustBeInteger(name, value, contextBuilder) {
    mustSatisfy_1.default(name, isInteger_1.default(value), beAnInteger, contextBuilder);
    return value;
  }
  exports_1("default", mustBeInteger);
  return {
    setters: [function(mustSatisfy_1_1) {
      mustSatisfy_1 = mustSatisfy_1_1;
    }, function(isInteger_1_1) {
      isInteger_1 = isInteger_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/i18n/readOnly.js", ["../checks/mustBeString"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustBeString_1;
  function readOnly(name) {
    mustBeString_1.default('name', name);
    var message = {get message() {
        return "Property `" + name + "` is readonly.";
      }};
    return message;
  }
  exports_1("default", readOnly);
  return {
    setters: [function(mustBeString_1_1) {
      mustBeString_1 = mustBeString_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/QQ.js", ["../checks/mustBeInteger", "../i18n/readOnly"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustBeInteger_1,
      readOnly_1;
  var magicCode,
      QQ;
  return {
    setters: [function(mustBeInteger_1_1) {
      mustBeInteger_1 = mustBeInteger_1_1;
    }, function(readOnly_1_1) {
      readOnly_1 = readOnly_1_1;
    }],
    execute: function() {
      magicCode = Math.random();
      QQ = (function() {
        function QQ(n, d, code) {
          if (code !== magicCode) {
            throw new Error("Use the static create method instead of the constructor");
          }
          mustBeInteger_1.default('n', n);
          mustBeInteger_1.default('d', d);
          var g;
          var gcd = function(a, b) {
            var temp;
            if (a < 0) {
              a = -a;
            }
            if (b < 0) {
              b = -b;
            }
            if (b > a) {
              temp = a;
              a = b;
              b = temp;
            }
            while (true) {
              a %= b;
              if (a === 0) {
                return b;
              }
              b %= a;
              if (b === 0) {
                return a;
              }
            }
          };
          if (d === 0) {
            throw new Error("denominator must not be zero");
          }
          if (n === 0) {
            g = 1;
          } else {
            g = gcd(Math.abs(n), Math.abs(d));
          }
          if (d < 0) {
            n = -n;
            d = -d;
          }
          this._numer = n / g;
          this._denom = d / g;
        }
        Object.defineProperty(QQ.prototype, "numer", {
          get: function() {
            return this._numer;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('numer').message);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(QQ.prototype, "denom", {
          get: function() {
            return this._denom;
          },
          set: function(unused) {
            throw new Error(readOnly_1.default('denom').message);
          },
          enumerable: true,
          configurable: true
        });
        QQ.prototype.add = function(rhs) {
          return QQ.valueOf(this._numer * rhs._denom + this._denom * rhs._numer, this._denom * rhs._denom);
        };
        QQ.prototype.sub = function(rhs) {
          return QQ.valueOf(this._numer * rhs._denom - this._denom * rhs._numer, this._denom * rhs._denom);
        };
        QQ.prototype.mul = function(rhs) {
          return QQ.valueOf(this._numer * rhs._numer, this._denom * rhs._denom);
        };
        QQ.prototype.div = function(rhs) {
          var numer = this._numer * rhs._denom;
          var denom = this._denom * rhs._numer;
          if (numer === 0) {
            if (denom === 0) {
              return QQ.valueOf(numer, denom);
            } else {
              return QQ.ZERO;
            }
          } else {
            if (denom === 0) {
              return QQ.valueOf(numer, denom);
            } else {
              return QQ.valueOf(numer, denom);
            }
          }
        };
        QQ.prototype.isOne = function() {
          return this._numer === 1 && this._denom === 1;
        };
        QQ.prototype.isZero = function() {
          return this._numer === 0 && this._denom === 1;
        };
        QQ.prototype.hashCode = function() {
          return 37 * this.numer + 13 * this.denom;
        };
        QQ.prototype.inv = function() {
          return QQ.valueOf(this._denom, this._numer);
        };
        QQ.prototype.neg = function() {
          return QQ.valueOf(-this._numer, this._denom);
        };
        QQ.prototype.equals = function(other) {
          if (other instanceof QQ) {
            return this._numer * other._denom === this._denom * other._numer;
          } else {
            return false;
          }
        };
        QQ.prototype.toString = function() {
          return "" + this._numer + "/" + this._denom + "";
        };
        QQ.prototype.__add__ = function(rhs) {
          if (rhs instanceof QQ) {
            return this.add(rhs);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__radd__ = function(lhs) {
          if (lhs instanceof QQ) {
            return lhs.add(this);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__sub__ = function(rhs) {
          if (rhs instanceof QQ) {
            return this.sub(rhs);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__rsub__ = function(lhs) {
          if (lhs instanceof QQ) {
            return lhs.sub(this);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__mul__ = function(rhs) {
          if (rhs instanceof QQ) {
            return this.mul(rhs);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__rmul__ = function(lhs) {
          if (lhs instanceof QQ) {
            return lhs.mul(this);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__div__ = function(rhs) {
          if (rhs instanceof QQ) {
            return this.div(rhs);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__rdiv__ = function(lhs) {
          if (lhs instanceof QQ) {
            return lhs.div(this);
          } else {
            return void 0;
          }
        };
        QQ.prototype.__pos__ = function() {
          return this;
        };
        QQ.prototype.__neg__ = function() {
          return this.neg();
        };
        QQ.valueOf = function(n, d) {
          if (n === 0) {
            if (d !== 0) {
              return QQ.ZERO;
            } else {}
          } else if (d === 0) {} else if (n === d) {
            return QQ.ONE;
          } else if (n === 1) {
            if (d === 2) {
              return QQ.POS_01_02;
            } else if (d === 3) {
              return QQ.POS_01_03;
            } else if (d === 4) {
              return QQ.POS_01_04;
            } else if (d === 5) {
              return QQ.POS_01_05;
            } else if (d === -3) {
              return QQ.NEG_01_03;
            }
          } else if (n === -1) {
            if (d === 1) {
              return QQ.NEG_01_01;
            } else if (d === 3) {
              return QQ.NEG_01_03;
            }
          } else if (n === 2) {
            if (d === 1) {
              return QQ.POS_02_01;
            } else if (d === 3) {
              return QQ.POS_02_03;
            }
          } else if (n === -2) {
            if (d === 1) {
              return QQ.NEG_02_01;
            }
          } else if (n === 3) {
            if (d === 1) {
              return QQ.POS_03_01;
            }
          } else if (n === -3) {
            if (d === 1) {
              return QQ.NEG_03_01;
            }
          } else if (n === 4) {
            if (d === 1) {
              return QQ.POS_04_01;
            }
          } else if (n === 5) {
            if (d === 1) {
              return QQ.POS_05_01;
            }
          } else if (n === 6) {
            if (d === 1) {
              return QQ.POS_06_01;
            }
          } else if (n === 7) {
            if (d === 1) {
              return QQ.POS_07_01;
            }
          } else if (n === 8) {
            if (d === 1) {
              return QQ.POS_08_01;
            }
          }
          return new QQ(n, d, magicCode);
        };
        QQ.POS_08_01 = new QQ(8, 1, magicCode);
        QQ.POS_07_01 = new QQ(7, 1, magicCode);
        QQ.POS_06_01 = new QQ(6, 1, magicCode);
        QQ.POS_05_01 = new QQ(5, 1, magicCode);
        QQ.POS_04_01 = new QQ(4, 1, magicCode);
        QQ.POS_03_01 = new QQ(3, 1, magicCode);
        QQ.POS_02_01 = new QQ(2, 1, magicCode);
        QQ.ONE = new QQ(1, 1, magicCode);
        QQ.POS_01_02 = new QQ(1, 2, magicCode);
        QQ.POS_01_03 = new QQ(1, 3, magicCode);
        QQ.POS_01_04 = new QQ(1, 4, magicCode);
        QQ.POS_01_05 = new QQ(1, 5, magicCode);
        QQ.ZERO = new QQ(0, 1, magicCode);
        QQ.NEG_01_03 = new QQ(-1, 3, magicCode);
        QQ.NEG_01_01 = new QQ(-1, 1, magicCode);
        QQ.NEG_02_01 = new QQ(-2, 1, magicCode);
        QQ.NEG_03_01 = new QQ(-3, 1, magicCode);
        QQ.POS_02_03 = new QQ(2, 3, magicCode);
        return QQ;
      }());
      exports_1("QQ", QQ);
    }
  };
});

System.register("davinci-units/math/Dimensions.js", ["../math/QQ", "../i18n/notSupported"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var QQ_1,
      notSupported_1;
  var R0,
      R1,
      R2,
      M1,
      Dimensions;
  function assertArgRational(name, arg) {
    if (arg instanceof QQ_1.QQ) {
      return arg;
    } else {
      throw new Error("Argument '" + arg + "' must be a QQ");
    }
  }
  return {
    setters: [function(QQ_1_1) {
      QQ_1 = QQ_1_1;
    }, function(notSupported_1_1) {
      notSupported_1 = notSupported_1_1;
    }],
    execute: function() {
      R0 = QQ_1.QQ.valueOf(0, 1);
      R1 = QQ_1.QQ.valueOf(1, 1);
      R2 = QQ_1.QQ.valueOf(2, 1);
      M1 = QQ_1.QQ.valueOf(-1, 1);
      Dimensions = (function() {
        function Dimensions(M, L, T, Q, temperature, amount, intensity) {
          this.M = M;
          this.L = L;
          this.T = T;
          this.Q = Q;
          this.temperature = temperature;
          this.amount = amount;
          this.intensity = intensity;
          assertArgRational('M', M);
          assertArgRational('L', L);
          assertArgRational('T', T);
          assertArgRational('Q', Q);
          assertArgRational('temperature', temperature);
          assertArgRational('amount', amount);
          assertArgRational('intensity', intensity);
          if (arguments.length !== 7) {
            throw new Error("Expecting 7 arguments");
          }
        }
        Dimensions.prototype.compatible = function(rhs) {
          if (this.M.equals(rhs.M) && this.L.equals(rhs.L) && this.T.equals(rhs.T) && this.Q.equals(rhs.Q) && this.temperature.equals(rhs.temperature) && this.amount.equals(rhs.amount) && this.intensity.equals(rhs.intensity)) {
            return this;
          } else {
            if (this.isOne()) {
              if (rhs.isOne()) {
                throw new Error();
              } else {
                throw new Error("Dimensions must be equal (dimensionless, " + rhs + ")");
              }
            } else {
              if (rhs.isOne()) {
                throw new Error("Dimensions must be equal (" + this + ", dimensionless)");
              } else {
                throw new Error("Dimensions must be equal (" + this + ", " + rhs + ")");
              }
            }
          }
        };
        Dimensions.prototype.mul = function(rhs) {
          return new Dimensions(this.M.add(rhs.M), this.L.add(rhs.L), this.T.add(rhs.T), this.Q.add(rhs.Q), this.temperature.add(rhs.temperature), this.amount.add(rhs.amount), this.intensity.add(rhs.intensity));
        };
        Dimensions.prototype.div = function(rhs) {
          return new Dimensions(this.M.sub(rhs.M), this.L.sub(rhs.L), this.T.sub(rhs.T), this.Q.sub(rhs.Q), this.temperature.sub(rhs.temperature), this.amount.sub(rhs.amount), this.intensity.sub(rhs.intensity));
        };
        Dimensions.prototype.pow = function(exponent) {
          return new Dimensions(this.M.mul(exponent), this.L.mul(exponent), this.T.mul(exponent), this.Q.mul(exponent), this.temperature.mul(exponent), this.amount.mul(exponent), this.intensity.mul(exponent));
        };
        Dimensions.prototype.sqrt = function() {
          return new Dimensions(this.M.div(R2), this.L.div(R2), this.T.div(R2), this.Q.div(R2), this.temperature.div(R2), this.amount.div(R2), this.intensity.div(R2));
        };
        Dimensions.prototype.isOne = function() {
          return this.M.isZero() && this.L.isZero() && this.T.isZero() && this.Q.isZero() && this.temperature.isZero() && this.amount.isZero() && this.intensity.isZero();
        };
        Dimensions.prototype.isZero = function() {
          throw new Error(notSupported_1.default('isZero').message);
        };
        Dimensions.prototype.inv = function() {
          return new Dimensions(this.M.neg(), this.L.neg(), this.T.neg(), this.Q.neg(), this.temperature.neg(), this.amount.neg(), this.intensity.neg());
        };
        Dimensions.prototype.neg = function() {
          throw new Error(notSupported_1.default('neg').message);
        };
        Dimensions.prototype.toString = function() {
          var stringify = function(rational, label) {
            if (rational.numer === 0) {
              return null;
            } else if (rational.denom === 1) {
              if (rational.numer === 1) {
                return "" + label;
              } else {
                return "" + label + " ** " + rational.numer;
              }
            }
            return "" + label + " ** " + rational;
          };
          return [stringify(this.M, 'mass'), stringify(this.L, 'length'), stringify(this.T, 'time'), stringify(this.Q, 'charge'), stringify(this.temperature, 'thermodynamic temperature'), stringify(this.amount, 'amount of substance'), stringify(this.intensity, 'luminous intensity')].filter(function(x) {
            return typeof x === 'string';
          }).join(" * ");
        };
        Dimensions.prototype.__add__ = function(rhs) {
          if (rhs instanceof Dimensions) {
            return this.compatible(rhs);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__radd__ = function(lhs) {
          if (lhs instanceof Dimensions) {
            return lhs.compatible(this);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__sub__ = function(rhs) {
          if (rhs instanceof Dimensions) {
            return this.compatible(rhs);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__rsub__ = function(lhs) {
          if (lhs instanceof Dimensions) {
            return lhs.compatible(this);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__mul__ = function(rhs) {
          if (rhs instanceof Dimensions) {
            return this.mul(rhs);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__rmul__ = function(lhs) {
          if (lhs instanceof Dimensions) {
            return lhs.mul(this);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__div__ = function(rhs) {
          if (rhs instanceof Dimensions) {
            return this.div(rhs);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__rdiv__ = function(lhs) {
          if (lhs instanceof Dimensions) {
            return lhs.div(this);
          } else {
            return void 0;
          }
        };
        Dimensions.prototype.__pos__ = function() {
          return this;
        };
        Dimensions.prototype.__neg__ = function() {
          return this;
        };
        Dimensions.ONE = new Dimensions(R0, R0, R0, R0, R0, R0, R0);
        Dimensions.MASS = new Dimensions(R1, R0, R0, R0, R0, R0, R0);
        Dimensions.LENGTH = new Dimensions(R0, R1, R0, R0, R0, R0, R0);
        Dimensions.TIME = new Dimensions(R0, R0, R1, R0, R0, R0, R0);
        Dimensions.CHARGE = new Dimensions(R0, R0, R0, R1, R0, R0, R0);
        Dimensions.CURRENT = new Dimensions(R0, R0, M1, R1, R0, R0, R0);
        Dimensions.TEMPERATURE = new Dimensions(R0, R0, R0, R0, R1, R0, R0);
        Dimensions.AMOUNT = new Dimensions(R0, R0, R0, R0, R0, R1, R0);
        Dimensions.INTENSITY = new Dimensions(R0, R0, R0, R0, R0, R0, R1);
        return Dimensions;
      }());
      exports_1("Dimensions", Dimensions);
    }
  };
});

System.register("davinci-units/i18n/notImplemented.js", ["../checks/mustBeString"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustBeString_1;
  function default_1(name) {
    mustBeString_1.default('name', name);
    var message = {get message() {
        return "'" + name + "' method is not yet implemented.";
      }};
    return message;
  }
  exports_1("default", default_1);
  return {
    setters: [function(mustBeString_1_1) {
      mustBeString_1 = mustBeString_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/checks/mustSatisfy.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function mustSatisfy(name, condition, messageBuilder, contextBuilder) {
    if (!condition) {
      var message = messageBuilder ? messageBuilder() : "satisfy some condition";
      var context = contextBuilder ? " in " + contextBuilder() : "";
      throw new Error(name + " must " + message + context + ".");
    }
  }
  exports_1("default", mustSatisfy);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/checks/isString.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function isString(s) {
    return (typeof s === 'string');
  }
  exports_1("default", isString);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("davinci-units/checks/mustBeString.js", ["../checks/mustSatisfy", "../checks/isString"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustSatisfy_1,
      isString_1;
  function beAString() {
    return "be a string";
  }
  function default_1(name, value, contextBuilder) {
    mustSatisfy_1.default(name, isString_1.default(value), beAString, contextBuilder);
    return value;
  }
  exports_1("default", default_1);
  return {
    setters: [function(mustSatisfy_1_1) {
      mustSatisfy_1 = mustSatisfy_1_1;
    }, function(isString_1_1) {
      isString_1 = isString_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/i18n/notSupported.js", ["../checks/mustBeString"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var mustBeString_1;
  function default_1(name) {
    mustBeString_1.default('name', name);
    var message = {get message() {
        return "Method `" + name + "` is not supported.";
      }};
    return message;
  }
  exports_1("default", default_1);
  return {
    setters: [function(mustBeString_1_1) {
      mustBeString_1 = mustBeString_1_1;
    }],
    execute: function() {}
  };
});

System.register("davinci-units/math/Unit.js", ["../math/Dimensions", "../i18n/notImplemented", "../i18n/notSupported"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Dimensions_1,
      notImplemented_1,
      notSupported_1;
  var SYMBOLS_SI,
      patterns,
      decodes,
      dumbString,
      unitString,
      Unit;
  function add(lhs, rhs) {
    return new Unit(lhs.multiplier + rhs.multiplier, lhs.dimensions.compatible(rhs.dimensions), lhs.labels);
  }
  function sub(lhs, rhs) {
    return new Unit(lhs.multiplier - rhs.multiplier, lhs.dimensions.compatible(rhs.dimensions), lhs.labels);
  }
  function mul(lhs, rhs) {
    return new Unit(lhs.multiplier * rhs.multiplier, lhs.dimensions.mul(rhs.dimensions), lhs.labels);
  }
  function scale(α, unit) {
    return new Unit(α * unit.multiplier, unit.dimensions, unit.labels);
  }
  function div(lhs, rhs) {
    return new Unit(lhs.multiplier / rhs.multiplier, lhs.dimensions.div(rhs.dimensions), lhs.labels);
  }
  return {
    setters: [function(Dimensions_1_1) {
      Dimensions_1 = Dimensions_1_1;
    }, function(notImplemented_1_1) {
      notImplemented_1 = notImplemented_1_1;
    }, function(notSupported_1_1) {
      notSupported_1 = notSupported_1_1;
    }],
    execute: function() {
      SYMBOLS_SI = ['kg', 'm', 's', 'C', 'K', 'mol', 'cd'];
      patterns = [[-1, 1, -3, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1], [-1, 1, -2, 1, 1, 1, 2, 1, 0, 1, 0, 1, 0, 1], [-1, 1, -2, 1, 2, 1, 2, 1, 0, 1, 0, 1, 0, 1], [-1, 1, +0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1], [+0, 1, -3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1], [+0, 1, 2, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1], [+0, 1, 0, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1], [+0, 1, 0, 1, -1, 1, 1, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, -1, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, -1, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 0, 1, -3, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 0, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 0, 1, -1, 1, -1, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, -3, 1, 0, 1, -1, 1, 0, 1, 0, 1], [1, 1, 1, 1, -2, 1, -1, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 1, 0, 1, -2, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, -2, 1, 0, 1, -1, 1, 0, 1, 0, 1], [0, 1, 2, 1, -2, 1, 0, 1, -1, 1, 0, 1, 0, 1], [1, 1, 2, 1, -2, 1, 0, 1, -1, 1, -1, 1, 0, 1], [1, 1, 2, 1, -2, 1, 0, 1, 0, 1, -1, 1, 0, 1], [1, 1, 2, 1, -2, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, -1, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, -3, 1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, -2, 1, -1, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, -1, 1, -2, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, 0, 1, -2, 1, 0, 1, 0, 1, 0, 1], [1, 1, 2, 1, -1, 1, -1, 1, 0, 1, 0, 1, 0, 1]];
      decodes = [["F/m"], ["S"], ["F"], ["C/kg"], ["C/m ** 3"], ["J/kg"], ["Hz"], ["A"], ["m/s ** 2"], ["m/s"], ["kg·m/s"], ["Pa"], ["Pa·s"], ["W/m ** 2"], ["N/m"], ["T"], ["W/(m·K)"], ["V/m"], ["N"], ["H/m"], ["J/K"], ["J/(kg·K)"], ["J/(mol·K)"], ["J/mol"], ["J"], ["J·s"], ["W"], ["V"], ["Ω"], ["H"], ["Wb"]];
      dumbString = function(multiplier, formatted, dimensions, labels) {
        var stringify = function(rational, label) {
          if (rational.numer === 0) {
            return null;
          } else if (rational.denom === 1) {
            if (rational.numer === 1) {
              return "" + label;
            } else {
              return "" + label + " ** " + rational.numer;
            }
          }
          return "" + label + " ** " + rational;
        };
        var operatorStr = multiplier === 1 || dimensions.isOne() ? "" : " ";
        var scaleString = multiplier === 1 ? "" : formatted;
        var unitsString = [stringify(dimensions.M, labels[0]), stringify(dimensions.L, labels[1]), stringify(dimensions.T, labels[2]), stringify(dimensions.Q, labels[3]), stringify(dimensions.temperature, labels[4]), stringify(dimensions.amount, labels[5]), stringify(dimensions.intensity, labels[6])].filter(function(x) {
          return typeof x === 'string';
        }).join(" ");
        return "" + scaleString + operatorStr + unitsString;
      };
      unitString = function(multiplier, formatted, dimensions, labels) {
        var M = dimensions.M;
        var L = dimensions.L;
        var T = dimensions.T;
        var Q = dimensions.Q;
        var temperature = dimensions.temperature;
        var amount = dimensions.amount;
        var intensity = dimensions.intensity;
        for (var i = 0,
            len = patterns.length; i < len; i++) {
          var pattern = patterns[i];
          if (M.numer === pattern[0] && M.denom === pattern[1] && L.numer === pattern[2] && L.denom === pattern[3] && T.numer === pattern[4] && T.denom === pattern[5] && Q.numer === pattern[6] && Q.denom === pattern[7] && temperature.numer === pattern[8] && temperature.denom === pattern[9] && amount.numer === pattern[10] && amount.denom === pattern[11] && intensity.numer === pattern[12] && intensity.denom === pattern[13]) {
            if (multiplier !== 1) {
              return multiplier + " * " + decodes[i][0];
            } else {
              return decodes[i][0];
            }
          }
        }
        return dumbString(multiplier, formatted, dimensions, labels);
      };
      Unit = (function() {
        function Unit(multiplier, dimensions, labels) {
          this.multiplier = multiplier;
          this.dimensions = dimensions;
          this.labels = labels;
          if (labels.length !== 7) {
            throw new Error("Expecting 7 elements in the labels array.");
          }
          this.multiplier = multiplier;
          this.dimensions = dimensions;
          this.labels = labels;
        }
        Unit.prototype.compatible = function(rhs) {
          if (rhs instanceof Unit) {
            this.dimensions.compatible(rhs.dimensions);
            return this;
          } else {
            throw new Error("Illegal Argument for Unit.compatible: " + rhs);
          }
        };
        Unit.prototype.add = function(rhs) {
          return add(this, rhs);
        };
        Unit.prototype.__add__ = function(rhs) {
          if (rhs instanceof Unit) {
            return add(this, rhs);
          } else {
            return;
          }
        };
        Unit.prototype.__radd__ = function(lhs) {
          if (lhs instanceof Unit) {
            return add(lhs, this);
          } else {
            return;
          }
        };
        Unit.prototype.sub = function(rhs) {
          return sub(this, rhs);
        };
        Unit.prototype.__sub__ = function(rhs) {
          if (rhs instanceof Unit) {
            return sub(this, rhs);
          } else {
            return;
          }
        };
        Unit.prototype.__rsub__ = function(lhs) {
          if (lhs instanceof Unit) {
            return sub(lhs, this);
          } else {
            return;
          }
        };
        Unit.prototype.mul = function(rhs) {
          return mul(this, rhs);
        };
        Unit.prototype.__mul__ = function(rhs) {
          if (rhs instanceof Unit) {
            return mul(this, rhs);
          } else if (typeof rhs === 'number') {
            return scale(rhs, this);
          } else {
            return;
          }
        };
        Unit.prototype.__rmul__ = function(lhs) {
          if (lhs instanceof Unit) {
            return mul(lhs, this);
          } else if (typeof lhs === 'number') {
            return scale(lhs, this);
          } else {
            return;
          }
        };
        Unit.prototype.div = function(rhs) {
          return div(this, rhs);
        };
        Unit.prototype.divByScalar = function(α) {
          return new Unit(this.multiplier / α, this.dimensions, this.labels);
        };
        Unit.prototype.__div__ = function(other) {
          if (other instanceof Unit) {
            return div(this, other);
          } else if (typeof other === 'number') {
            return new Unit(this.multiplier / other, this.dimensions, this.labels);
          } else {
            return;
          }
        };
        Unit.prototype.__rdiv__ = function(other) {
          if (other instanceof Unit) {
            return div(other, this);
          } else if (typeof other === 'number') {
            return new Unit(other / this.multiplier, this.dimensions.inv(), this.labels);
          } else {
            return;
          }
        };
        Unit.prototype.pattern = function() {
          var ns = [];
          ns.push(this.dimensions.M.numer);
          ns.push(this.dimensions.M.denom);
          ns.push(this.dimensions.L.numer);
          ns.push(this.dimensions.L.denom);
          ns.push(this.dimensions.T.numer);
          ns.push(this.dimensions.T.denom);
          ns.push(this.dimensions.Q.numer);
          ns.push(this.dimensions.Q.denom);
          ns.push(this.dimensions.temperature.numer);
          ns.push(this.dimensions.temperature.denom);
          ns.push(this.dimensions.amount.numer);
          ns.push(this.dimensions.amount.denom);
          ns.push(this.dimensions.intensity.numer);
          ns.push(this.dimensions.intensity.denom);
          return JSON.stringify(ns);
        };
        Unit.prototype.pow = function(exponent) {
          return new Unit(Math.pow(this.multiplier, exponent.numer / exponent.denom), this.dimensions.pow(exponent), this.labels);
        };
        Unit.prototype.inv = function() {
          return new Unit(1 / this.multiplier, this.dimensions.inv(), this.labels);
        };
        Unit.prototype.neg = function() {
          return new Unit(-this.multiplier, this.dimensions, this.labels);
        };
        Unit.prototype.isOne = function() {
          return this.dimensions.isOne() && (this.multiplier === 1);
        };
        Unit.prototype.isZero = function() {
          return this.dimensions.isZero() || (this.multiplier === 0);
        };
        Unit.prototype.lerp = function(target, α) {
          throw new Error(notImplemented_1.default('lerp').message);
        };
        Unit.prototype.norm = function() {
          return new Unit(Math.abs(this.multiplier), this.dimensions, this.labels);
        };
        Unit.prototype.quad = function() {
          return new Unit(this.multiplier * this.multiplier, this.dimensions.mul(this.dimensions), this.labels);
        };
        Unit.prototype.reflect = function(n) {
          return this;
        };
        Unit.prototype.rotate = function(rotor) {
          return this;
        };
        Unit.prototype.scale = function(α) {
          return new Unit(this.multiplier * α, this.dimensions, this.labels);
        };
        Unit.prototype.slerp = function(target, α) {
          throw new Error(notImplemented_1.default('slerp').message);
        };
        Unit.prototype.sqrt = function() {
          return new Unit(Math.sqrt(this.multiplier), this.dimensions.sqrt(), this.labels);
        };
        Unit.prototype.stress = function(σ) {
          throw new Error(notSupported_1.default('stress').message);
        };
        Unit.prototype.toExponential = function(fractionDigits) {
          return unitString(this.multiplier, this.multiplier.toExponential(fractionDigits), this.dimensions, this.labels);
        };
        Unit.prototype.toFixed = function(fractionDigits) {
          return unitString(this.multiplier, this.multiplier.toFixed(fractionDigits), this.dimensions, this.labels);
        };
        Unit.prototype.toPrecision = function(precision) {
          return unitString(this.multiplier, this.multiplier.toPrecision(precision), this.dimensions, this.labels);
        };
        Unit.prototype.toString = function(radix) {
          return unitString(this.multiplier, this.multiplier.toString(radix), this.dimensions, this.labels);
        };
        Unit.prototype.__pos__ = function() {
          return this;
        };
        Unit.prototype.__neg__ = function() {
          return this.neg();
        };
        Unit.isOne = function(uom) {
          if (uom === void 0) {
            return true;
          } else if (uom instanceof Unit) {
            return uom.isOne();
          } else {
            throw new Error("isOne argument must be a Unit or undefined.");
          }
        };
        Unit.assertDimensionless = function(uom) {
          if (!Unit.isOne(uom)) {
            throw new Error("uom must be dimensionless.");
          }
        };
        Unit.compatible = function(lhs, rhs) {
          if (lhs) {
            if (rhs) {
              return lhs.compatible(rhs);
            } else {
              if (lhs.isOne()) {
                return void 0;
              } else {
                throw new Error(lhs + " is incompatible with 1");
              }
            }
          } else {
            if (rhs) {
              if (rhs.isOne()) {
                return void 0;
              } else {
                throw new Error("1 is incompatible with " + rhs);
              }
            } else {
              return void 0;
            }
          }
        };
        Unit.mul = function(lhs, rhs) {
          if (lhs) {
            if (rhs) {
              return lhs.mul(rhs);
            } else if (Unit.isOne(rhs)) {
              return lhs;
            } else {
              return void 0;
            }
          } else if (Unit.isOne(lhs)) {
            return rhs;
          } else {
            return void 0;
          }
        };
        Unit.div = function(lhs, rhs) {
          if (lhs) {
            if (rhs) {
              return lhs.div(rhs);
            } else {
              return lhs;
            }
          } else {
            if (rhs) {
              return rhs.inv();
            } else {
              return void 0;
            }
          }
        };
        Unit.sqrt = function(uom) {
          if (typeof uom !== 'undefined') {
            if (!uom.isOne()) {
              return new Unit(Math.sqrt(uom.multiplier), uom.dimensions.sqrt(), uom.labels);
            } else {
              return void 0;
            }
          } else {
            return void 0;
          }
        };
        Unit.ONE = new Unit(1.0, Dimensions_1.Dimensions.ONE, SYMBOLS_SI);
        Unit.KILOGRAM = new Unit(1.0, Dimensions_1.Dimensions.MASS, SYMBOLS_SI);
        Unit.METER = new Unit(1.0, Dimensions_1.Dimensions.LENGTH, SYMBOLS_SI);
        Unit.SECOND = new Unit(1.0, Dimensions_1.Dimensions.TIME, SYMBOLS_SI);
        Unit.COULOMB = new Unit(1.0, Dimensions_1.Dimensions.CHARGE, SYMBOLS_SI);
        Unit.AMPERE = new Unit(1.0, Dimensions_1.Dimensions.CURRENT, SYMBOLS_SI);
        Unit.KELVIN = new Unit(1.0, Dimensions_1.Dimensions.TEMPERATURE, SYMBOLS_SI);
        Unit.MOLE = new Unit(1.0, Dimensions_1.Dimensions.AMOUNT, SYMBOLS_SI);
        Unit.CANDELA = new Unit(1.0, Dimensions_1.Dimensions.INTENSITY, SYMBOLS_SI);
        return Unit;
      }());
      exports_1("Unit", Unit);
    }
  };
});

System.register("davinci-units/config.js", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Units,
      config;
  return {
    setters: [],
    execute: function() {
      Units = (function() {
        function Units() {
          this.GITHUB = 'https://github.com/geometryzen/davinci-units';
          this.LAST_MODIFIED = '2016-07-20';
          this.NAMESPACE = 'UNITS';
          this.VERSION = '1.0.0';
        }
        Units.prototype.log = function(message) {
          var optionalParams = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
          }
          console.log(message);
        };
        Units.prototype.info = function(message) {
          var optionalParams = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
          }
          console.info(message);
        };
        Units.prototype.warn = function(message) {
          var optionalParams = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
          }
          console.warn(message);
        };
        Units.prototype.error = function(message) {
          var optionalParams = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
          }
          console.error(message);
        };
        return Units;
      }());
      config = new Units();
      exports_1("default", config);
    }
  };
});

System.register("davinci-units.js", ["./davinci-units/math/Dimensions", "./davinci-units/math/G2", "./davinci-units/math/G3", "./davinci-units/math/mathcore", "./davinci-units/math/QQ", "./davinci-units/math/Unit", "./davinci-units/config"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Dimensions_1,
      G2_1,
      G3_1,
      mathcore_1,
      QQ_1,
      Unit_1,
      config_1;
  var units;
  return {
    setters: [function(Dimensions_1_1) {
      Dimensions_1 = Dimensions_1_1;
    }, function(G2_1_1) {
      G2_1 = G2_1_1;
    }, function(G3_1_1) {
      G3_1 = G3_1_1;
    }, function(mathcore_1_1) {
      mathcore_1 = mathcore_1_1;
    }, function(QQ_1_1) {
      QQ_1 = QQ_1_1;
    }, function(Unit_1_1) {
      Unit_1 = Unit_1_1;
    }, function(config_1_1) {
      config_1 = config_1_1;
    }],
    execute: function() {
      units = {
        get LAST_MODIFIED() {
          return config_1.default.LAST_MODIFIED;
        },
        get VERSION() {
          return config_1.default.VERSION;
        },
        get Dimensions() {
          return Dimensions_1.Dimensions;
        },
        get Unit() {
          return Unit_1.Unit;
        },
        get G2() {
          return G2_1.G2;
        },
        get G3() {
          return G3_1.default;
        },
        get QQ() {
          return QQ_1.QQ;
        },
        get cos() {
          return mathcore_1.default.cos;
        },
        get cosh() {
          return mathcore_1.default.cosh;
        },
        get exp() {
          return mathcore_1.default.exp;
        },
        get log() {
          return mathcore_1.default.log;
        },
        get norm() {
          return mathcore_1.default.norm;
        },
        get quad() {
          return mathcore_1.default.quad;
        },
        get sin() {
          return mathcore_1.default.sin;
        },
        get sinh() {
          return mathcore_1.default.sinh;
        },
        get sqrt() {
          return mathcore_1.default.sqrt;
        }
      };
      exports_1("default", units);
    }
  };
});

//# sourceMappingURL=davinci-units-system-es5.js.map