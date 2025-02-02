export const allPostsQuery = () => {
  const query = `*[_type == "reels"] | order(_createdAt desc){
    _id,
    name,
     category,
       video{
        asset->{
          _id,
          url
        }
      },
    
  }`;

  return query;
};
export const allPrductionReelsQuery = () => {
  const query = `*[_type == "productionReels"] | order(_createdAt desc){
    _id,
    name,
     category,
       video{
        asset->{
          _id,
          url
        }
      },
    
  }`;

  return query;
};
export const pinDetailQuery = (id) => {
  const query = `*[_type == "journal" &&  _id == '${id}']{
    
    bannerImage{
      asset->{
        url
      }
    },
    _id,
    title, 
    
    category,

    content,
    introText
    
  }`;
  return query;
};
export const allProductionVideosQuery = () => {
  const query = `*[_type == "production"] | order(_createdAt desc){
    _id,
    name,
       videos{
        asset->{
          _id,
          url
        }
      },
    
  }`;

  return query;
};
export const allHeroVideosQuery = () => {
  const query = `*[_type == "heroVideos"] | order(_createdAt desc){
    _id,
    title,
       videos{
        asset->{
          _id,
          url
        }
      },
    
  }`;

  return query;
};