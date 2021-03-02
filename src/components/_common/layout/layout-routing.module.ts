import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

/**
 * 不存在container文件夹，
 * 这里就是总路由
 */
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "user/main",
        loadChildren: () => import("../../user/main/main.module").then(m => m.MainModule)
      }
    ]
  },
  {
    path: "login/main",
    loadChildren: () => import("../../login/main/main.module").then(m => m.MainModule)
  },
  {
    path: "login/register",
    loadChildren: () => import("../../login/register/register.module").then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
