export enum storageNamesEnum {
    currentUser, wishlistItems, cartItems, recentlyViewedProducts
}

interface storageNamesModel {
    key: storageNamesEnum,
    value: string
}

export const getStorageName = (name: storageNamesEnum): string => {
    // var storageNames = Object.keys(storageNamesEnum).filter(key => !isNaN(Number(storageNamesEnum[key])));
    try {
        var storageName = Object.keys(storageNamesEnum).filter(key => !isNaN(Number(storageNamesEnum[key])))[name];
        return storageName;

    } catch (error) {
        return "";
    }

    // return storageNames.find(n => n.key == name).value;
}