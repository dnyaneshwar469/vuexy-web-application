import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  invoiceObj: any = [
    {
      invoiceName: "List",
      invoiceId: 1
    },
    {
      invoiceName: "Preview",
      invoiceId: 2
    },
    {
      invoiceName: "Edit",
      invoiceId: 3
    },
    {
      invoiceName: "Add",
      invoiceId: 4
    },
  ];
  ecommerceObj: any = [
    {
      ecommerceName: "Shop",
      ecommerceId: 1
    },
    {
      ecommerceName: "Details",
      ecommerceId: 2
    },
    {
      ecommerceName: "Wishlist",
      ecommerceId: 3
    },
    {
      ecommerceName: "Checkout",
      ecommerceId: 4
    },
  ];
  userObj: any = [
    {
      userName: "List"
    },
    {
      userName: "View"
    },
    {
      userName: "Edit"
    }
  ];
  pageObj: any = [
    {
      pageName: "Authentication", 
      isDropdown: true,
    },
    {
      pageName: "Account Settings"
    },
    {
      pageName: "Profile"
    },
    {
      pageName: "Faq"
    },
    {
      pageName: "Knowledge Base"
    },
    {
      pageName: "Pricing"
    },
    {
      pageName: "Blog",
      isDropdown: true,
    },
    {
      pageName: "Mail Templates",
      isDropdown: true,
    },
    {
      pageName: "Miscellaneous",
      isDropdown: true,
    },
  ];
  authObj: any = [
    {
      authName: "Login v1"
    },
    {
      authName: "Login v2"
    },
    {
      authName: "Register v1"
    },
    {
      authName: "Register v2"
    },
    {
      authName: "Forgot Password v1"
    },
    {
      authName: "Forgot Password v2"
    },
    {
      authName: "Reset Password v1"
    },
    {
      authName: "Reset Password v2"
    },
  ];
  blogObj: any = [
    {
      blogName: "List"
    },
    {
      blogName: "Detail"
    },
    {
      blogName: "Edit"
    },
  ];
  mailTempObj: any = [
    {
      mailTempName: "Welcome"
    },
    {
      mailTempName: "Reset Password"
    },
    {
      mailTempName: "Verify Email"
    },
    {
      mailTempName: "Deactivate Account"
    },
    {
      mailTempName: "Invoice"
    },
    {
      mailTempName: "Promotional"
    },
  ];
  miscellaneousObj : any =[
    {
      miscellaneousName: "Coming Soon"
    },
    {
      miscellaneousName: "Not Authorized"
    },
    {
      miscellaneousName: "Under Maintenance"
    },
    {
      miscellaneousName: "Error"
    },
  ]
  authentication:any = false;
  blog: any = true;


  constructor() { }

  ngOnInit(): void {
  }

  addClassTo(val:any){
    if(val == 0 && val == 6){
      return 'has-dropdown';
    }else{
      return 'has'
    }
  }
}
