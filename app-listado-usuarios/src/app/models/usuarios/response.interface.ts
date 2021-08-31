import { NumberInput } from '@angular/cdk/coercion';
import { usuariosI } from './usuarios.interface';
export interface responseI{
  page: NumberInput,
  per_page: NumberInput,
  total: NumberInput,
  total_pages: NumberInput,
  paginator: [],
  data: usuariosI[]
}
