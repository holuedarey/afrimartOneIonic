import { environment } from "../../../environments/environment";

const  BASE_URL = environment ? "https://afrimart-evibu.ondigitalocean.app" : "https://afrimart-evibu.ondigitalocean.app";

export const Endpoint = {
    AUTH: {
        login: `${BASE_URL}/auth/sign-in`,
        register: `${BASE_URL}/auth/sign-up`,
        verify: `${BASE_URL}/auth/verify`,
        resendVerify: `${BASE_URL}/auth/resend-verification`,
        initiatePasswordReset: `${BASE_URL}/auth/initiate-reset`,
        verifyPasswordReset: `${BASE_URL}/auth/verify-reset`,
    },
    
    USER: {
        editProfile: `${BASE_URL}/user/edit-profile`,
        changePassword: `${BASE_URL}/user/change-password`,
        profile: `${BASE_URL}/user`,
    },

    STORES: {
        storeDetails: `${BASE_URL}/stores/details?store=`,
        recent_contribution: `${BASE_URL}/reports/contributions/recent?membershipCode=`,
        member_contribution: `${BASE_URL}/contributions/member/`,
        
    },

    PRODUCT : {
        topProduct:  `${BASE_URL}/organisations/details`,
        viewProduct:  `${BASE_URL}/products?productId=`,
        productSubCategory:  `${BASE_URL}/products/category-products?category=`,
        searchProduct: `${BASE_URL}/products/search?`
    },

    CATEGORY: {
        topCategories : `${BASE_URL}/categories`
    },
   
}