import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "16dbce4y",
  dataset: "production",
  apiVersion: "2023-12-13",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}

export default client;
