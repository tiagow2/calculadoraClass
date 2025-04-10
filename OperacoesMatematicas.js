"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacoesMatematicas = void 0;
class OperacoesMatematicas {
    static somar(a, b) {
        return a + b;
    }
    static subtrair(a, b) {
        return a - b;
    }
    static multiplicar(a, b) {
        return a * b;
    }
    static dividir(a, b) {
        if (b === 0)
            throw new Error("Divisão por zero não é permitida.");
        return a / b;
    }
}
exports.OperacoesMatematicas = OperacoesMatematicas;
