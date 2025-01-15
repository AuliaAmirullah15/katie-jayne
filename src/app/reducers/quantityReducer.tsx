type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export default function quantityReducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 1 ? state - 1 : 1;
    default:
      return state;
  }
}
