export class RegisterModel {
    constructor(
        public email: string,
        public password: string,
        public confirmPassword: string,
        public firstName?: string,
        public lastName?: string,
        public gender?: string
    ) {}
}

export class LoginModel {
    constructor(
        public email: string,
        public password: string
    ) {}
}

export class ResponseBody<T> {
    constructor(
        public code?: number,
        public data?: T,
        public message?: string,
        public success?: boolean
    ) { }
}