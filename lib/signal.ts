export function signal<T>(initial_value: T) {
  let _value = initial_value;
  return {
    get value() {
      return _value;
    },
    set value(updated_value) {
      _value = updated_value;
    },
  };
}

export function effect<T>() {}
