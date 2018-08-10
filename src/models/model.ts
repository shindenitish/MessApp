export interface User {
    userId: string,
    userName: string,
    email: string,
    contact?: string,
    photoURL?: string,
    address?: { },
    defaultAddress?: string;
}

export interface Menu {
    menuId: string,
    menuType: string,
    menuCategory: string,
    menuName: string,
    timeFrom: Date,
    timeTo: Date,
    description: string,
    rate: number
}