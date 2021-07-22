import { IPasswordTestResult } from './../../interfaces/IPasswordTestResult';
export const isPasswordValid = (password: string): IPasswordTestResult => {
    const passwordTestResult: IPasswordTestResult = {
        message: "",
        isValid: true,
    };
    if (password.length < 0) {
        passwordTestResult.message = "Password must be at least 8 characters";
        passwordTestResult.isValid = false;
        return passwordTestResult;
    }
    const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    if (!strongPassword.test(password)) {
        passwordTestResult.isValid = false;
        passwordTestResult.message = "Password must contain at least 1 special character, 1 cap letter, and 1 number";
    }
    return passwordTestResult;
}