import { environment } from "../../../environments/environment";

const  BASE_URL = environment ? "https://afrimart-evibu.ondigitalocean.app/" : "https://afrimart-evibu.ondigitalocean.app/";

export const Endpoint = {
    AUTH: {
        login: `${BASE_URL}/auth/sign-in`,
        register: `${BASE_URL}/auth/sign-up`,
        verify: `${BASE_URL}/auth/verify`,
        initiatePasswordReset: `${BASE_URL}/auth/initiate-reset`,
        verifyPasswordReset: `${BASE_URL}/auth/verify-reset`,
    },
    
    USER: {
        editProfile: `${BASE_URL}/user/edit-profile`,
        changePassword: `${BASE_URL}/user/change-password`,
        profile: `${BASE_URL}/user`,
    },

    STORES: {
        contribution: `${BASE_URL}/reports/contributions?`,
        recent_contribution: `${BASE_URL}/reports/contributions/recent?membershipCode=`,
        member_contribution: `${BASE_URL}/contributions/member/`,
        
    },

    PRODUCT : {
        loan:  `${BASE_URL}/reports/loans?`,
        create_loan:  `${BASE_URL}/loans/requestloan`,
        loan_repayment:  `${BASE_URL}/reports/loanrepayments?`,
    },

    CATEGORY: {
        create_contriution : `${BASE_URL}/contributions`
    },
   
}