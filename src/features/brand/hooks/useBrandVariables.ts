import { useBrand } from './useBrand';
import { brandService } from '../services/brand.service';

export function useBrandVariables(brandId?: string) {
  const { activeBrand } = useBrand(brandId);

  const resolve = (text: string) => {
    if (!activeBrand) return text;
    return brandService.resolveVariables(text, activeBrand);
  };

  return { variables: activeBrand?.variables || [], resolve };
}
