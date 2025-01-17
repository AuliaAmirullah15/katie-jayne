export type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_QUANTITY"; payload: number };

export default function quantityReducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 1 ? state - 1 : 1;
    case "SET_QUANTITY":
      return action.payload;
    default:
      return state;
  }
}
