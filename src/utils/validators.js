export const required = (v) => (v && String(v).trim().length > 0 ? null : "Required");
export const email = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Invalid email";
export const phone = (v) =>
  /^[+\d][\d\s\-()]{6,}$/.test(v) ? null : "Invalid phone number";
export const minNum = (min) => (v) =>
  Number(v) >= min ? null : `Must be at least ${min}`;
export const maxNum = (max) => (v) =>
  Number(v) <= max ? null : `Must be at most ${max}`;

export function validate(values, rules) {
  const errors = {};
  for (const key in rules) {
    for (const rule of rules[key]) {
      const err = rule(values[key]);
      if (err) {
        errors[key] = err;
        break;
      }
    }
  }
  return errors;
}
