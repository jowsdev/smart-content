import { useState, useEffect, useCallback } from 'react';
import { brandService } from '../services/brand.service';
import type { Brand, BrandSummary } from '../types/brand.types';

export function useBrand(id?: string) {
  const [brands, setBrands] = useState<BrandSummary[]>([]);
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadBrands = useCallback(async () => {
    setIsLoading(true);
    const data = await brandService.loadBrands();
    setBrands(data);
    setIsLoading(false);
  }, []);

  const loadBrand = useCallback(async (brandId: string) => {
    setIsLoading(true);
    const data = await brandService.getBrand(brandId);
    setActiveBrand(data || null);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadBrands();
  }, [loadBrands]);

  useEffect(() => {
    if (id) loadBrand(id);
  }, [id, loadBrand]);

  const save = async (brand: Brand) => {
    await brandService.saveBrand(brand);
    await loadBrands();
    if (activeBrand?.id === brand.id) setActiveBrand(brand);
  };

  return { brands, activeBrand, isLoading, refresh: loadBrands, save };
}
