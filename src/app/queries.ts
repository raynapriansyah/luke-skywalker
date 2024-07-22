export async function getChannelName() {
  const res = await fetch("https://swapi.dev/api/people/1");
  const people = await res.json();

  return people.name as string;
}
