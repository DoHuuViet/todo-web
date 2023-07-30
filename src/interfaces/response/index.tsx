export enum STATUS {
    NEW = 'NEW',
    PROCESSING = 'PROCESSING',
    COMPLETED = 'COMPLETED',
}
export interface ITodo {
    id: number
    status: STATUS
    title: string
    body: string
    isDeleted?: boolean
    createdBy?: Date
    createdAt?: Date
}