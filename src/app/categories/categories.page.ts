import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/http-services/category.service';
import { RootCategoriesListModel } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})

export class CategoriesPage implements OnInit {
  ///Inputs
  title: string = '';
  longSearch: boolean = true;
  showBackButton: boolean = false;
  loading: boolean = false;
  showSearch: boolean = true;
  ////////////////////
  cat_data: any;
  isActive: string = '';
  topCategories: RootCategoriesListModel[] = [];
  subCat1Category: RootCategoriesListModel[] = [];
  paramId: string = '';
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    public router: Router
  ) {
    // if (this.router.getCurrentNavigation().extras.state) {
    //   // if (this.router.getCurrentNavigation().extras.state.cat) {
    //   // this.cat_data = this.router.getCurrentNavigation().extras.state.cat;
    //   // this.cat_data['productId'] = this.cat_data._id;
    //   // console.log('Category Detail: ' + JSON.stringify(this.cat_data));
    //   // }
    // }
  }
  ngOnInit() {
    this.paramId = '';
    this.route.params.subscribe((params) => {
      console.log('Entered Params ');
      if (params.id) {
        console.log('Category ID: ' + params.id);
        this.paramId = params.id;
        this.getTopCategories();
      }
      else{
        this.getTopCategories();
      }
      // this.setDocTitle(params.id);
    });
    
  }
  getTopCategories() {
    this.loading=true;
    this.categoryService.getTopCategories().subscribe((data) => {
        this.topCategories = data.data;
        // console.log('topCategories: ' + JSON.stringify(data));
        if (this.topCategories && this.paramId != '') {
          this.topCategories.forEach((cat) => {
            console.log('topCategories: ' + JSON.stringify(cat.id));
            if (cat.id === this.paramId) {
              this.loadLevel1SubCats(cat);
              this.loading=false;
            } else {
              this.loadLevel1SubCats(this.topCategories[0]);
              this.isActive = this.topCategories[0].name;
              this.loading=false;
            }
          });
        } else {
          this.loadLevel1SubCats(this.topCategories[0]);
          this.isActive = this.topCategories[0].name;
          this.loading=false;
        }
      },
      (err) => {
        this.loading=false;
      }
    );
  }
  loadLevel1SubCats(subCat: RootCategoriesListModel) {
    this.subCat1Category.length = 0;
    subCat.children.forEach((child) => {
      this.subCat1Category.push(child);
      this.isActive = subCat.name;
    });
  }
  getSubCat(data) {
    console.log("getSubCat :" + data.slug)
    this.router.navigateByUrl(`/sub-category/${data.slug}`);
    localStorage.SetTitle = data.name;
  }
  viewSubCategory(id: any,title:string) {
    localStorage.SetTitle=title;
    console.log('id :', id);
    this.router.navigate([`sub-category/${id}`]);
  }
  viewAllSubCats() {
    // console.log("viewAllSuatsbC")
  }
}
