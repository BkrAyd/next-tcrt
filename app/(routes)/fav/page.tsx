import React from 'react'

export async function generateMetadata() {
  return {
    title: "Fav Page",
    description: "This is the favorite page.",
  };
}

const FavPage = () => {
  return (
    <div>FavPage</div>
  )
}

export default FavPage