import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [FormsModule, ReactiveFormsModule, CommonModule, InputComponent, RadioComponent, RatingComponent]
})
export class SharedModule {}