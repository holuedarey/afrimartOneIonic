export interface StoreSummaryViewModel {
    StoreGuid: string;
    OwnerId: string;
    Name: string;
    Email: string;
    PhoneNumber: string;
    ProductCount: number;
    ImageUrl: string;
    TimeCreated: any;
    IsApproved: boolean;
    Rating: number;
}

export interface StoreListModel {
    address: {
        country: string
        city: string
        state: string
        zip: string
        no: string
        street: string
        landmark: string
        isDefault: true
    },
    status: true,
    statusColour: string
    products: [],
    _id: string
    name: string
    slug: string
    description: string
    merchant: string
    createdAt: Date
    updatedAt: Date
    __v: 0
}