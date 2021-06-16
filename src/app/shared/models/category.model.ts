export interface CategoryListModel {
    name: string
    imgUrl: string
    _id?: string
    ancestors?: RootCategoriesListModel[]
    children?:CategoryListModel[]
    status?: string
    statusColour?: string
    slug?: string
    description?: string
    level?: string,
    value? : string
    __v?: number
}

export interface CategoryListResponseModel {
    error: boolean,
    message: string,
    data: CategoryListModel[]
}

export interface RootCategoriesListModel {
    imgUrl: string
    children: RootCategoriesListModel[],
    id: string
    name: string
}

export interface RootCategoriesListResponseModel {
    error: boolean,
    message: string,
    data: RootCategoriesListModel[]
}