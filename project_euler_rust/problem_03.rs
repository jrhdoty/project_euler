/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

fn lpf(mut num: u64) -> u64 {
  let mut max = 2;
  while max < num {
    if num % max == 0 {
      num = num/max;
    } else {
      max += 1;
    }
  }
  return max;
}
  

fn main() {
  println!("Greatest prime is: {}", lpf(600851475143));
}
