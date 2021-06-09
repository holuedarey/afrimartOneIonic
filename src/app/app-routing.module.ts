import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'app',
    // canActivate:[AuthGuard],
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsPageModule),
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsPageModule),
  },
  {
    path: 'product-details/:searchString',
    loadChildren: () =>
      import('./product-details/product-details.module').then(
        (m) => m.ProductDetailsPageModule
      ),
  },
  {
    path: 'profile-details',
    loadChildren: () =>
      import('./profile-details/profile-details.module').then(
        (m) => m.ProfileDetailsPageModule
      ),
  },
  {
    path: 'change-password',
    // canActivate:[AuthGuard],
    loadChildren: () =>
      import('./change-password/change-password.module').then(
        (m) => m.ChangePasswordPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'orders/:id',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsPageModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishlistPageModule),
  },
  {
    path: 'address-book',
    loadChildren: () =>
      import('./address-book/address-book.module').then(
        (m) => m.AddressBookPageModule
      ),
  },
  {
    path: 'recently-viewed',
    loadChildren: () =>
      import('./recently-viewed/recently-viewed.module').then(
        (m) => m.RecentlyViewedPageModule
      ),
  },
  {
    path: 'my-cards',
    loadChildren: () =>
      import('./my-cards/my-cards.module').then((m) => m.MyCardsPageModule),
  },
  {
    path: 'fund-wallet',
    loadChildren: () =>
      import('./fund-wallet/fund-wallet.module').then(
        (m) => m.FundWalletPageModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutPageModule),
  },
  {
    path: 'activation-link',
    loadChildren: () =>
      import('./activation-link/activation-link.module').then(
        (m) => m.ActivationLinkPageModule
      ),
  },
  {
    path: 'sub-category',
    loadChildren: () =>
      import('./sub-category/sub-category.module').then(
        (m) => m.SubCategoryPageModule
      ),
  },
  {
    path: 'sub-category/:id',
    loadChildren: () =>
      import('./sub-category/sub-category.module').then(
        (m) => m.SubCategoryPageModule
      ),
  },
  {
    path: 'search-modal',
    loadChildren: () =>
      import('./search-modal/search-modal.module').then(
        (m) => m.SearchModalPageModule
      ),
  },
  {
    path: 'filter-modal',
    loadChildren: () =>
      import('./filter-modal/filter-modal.module').then(
        (m) => m.FilterModalPageModule
      ),
  },
  {
    path: 'card-modal',
    loadChildren: () => import('./card-modal/card-modal.module').then( m => m.CardModalPageModule)
  },
  {
    path: 'order-details/:id',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'company-profile',
    loadChildren: () => import('./company-profile/company-profile.module').then( m => m.CompanyProfilePageModule)
  },
  {
    path: 'request-qoute',
    loadChildren: () => import('./request-qoute/request-qoute.module').then( m => m.RequestQoutePageModule)
  },
  {
    path: 'messaging',
    loadChildren: () => import('./messaging/messaging.module').then( m => m.MessagingPageModule)
  },
  {
    path: 'contact-message',
    loadChildren: () => import('./contact-message/contact-message.module').then( m => m.ContactMessagePageModule)
  },
  {
    path: 'chat-message',
    loadChildren: () => import('./chat-message/chat-message.module').then( m => m.ChatMessagePageModule)
  },
  {
    path: 'become-supplier',
    loadChildren: () => import('./become-supplier/become-supplier.module').then( m => m.BecomeSupplierPageModule)
  },
  {
    path: 'forget-verify',
    loadChildren: () => import('./forget-verify/forget-verify.module').then( m => m.ForgetVerifyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
