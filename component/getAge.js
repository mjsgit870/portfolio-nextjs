export default function getAge() {
  const dob = new Date("07/02/2002");
  const month_diff = Date.now() - dob.getTime();

  const age_dt = new Date(month_diff);

  const year = age_dt.getUTCFullYear();

  const age = Math.abs(year - 1970);

  return age;
}
