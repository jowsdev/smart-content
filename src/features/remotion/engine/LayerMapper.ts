export class LayerMapper {
  static mapToComponent(layer: any) {
    // Logic to select the correct Remotion component from registry
    return {
      type: layer.type,
      props: layer.props,
    };
  }
}
