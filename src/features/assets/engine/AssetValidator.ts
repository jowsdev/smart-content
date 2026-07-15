export class AssetValidator {
  public validate(file: File) {
    console.log(`Asset Validator: Validating ${file.name}`);
    return { isValid: true };
  }
}

export const assetValidator = new AssetValidator();
