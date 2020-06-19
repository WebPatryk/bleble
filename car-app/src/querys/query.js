import { gql } from 'apollo-boost';

const cars = gql`
{
    cars{
  title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  image{
    url
  }
}
}
`;

const Audi = gql`
{
    cars(where:{brand:"Audi"}){
        title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  brand,
  image{
    url
  }
    }
  }
  
`
const Mercedes = gql`
{
    cars(where:{brand:"Mercedes"}){
        title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  brand,
  image{
    url
  }
    }
  }
  
`

const Lexus = gql`
{
    cars(where:{brand:"Lexus"}){
        title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  brand,
  image{
    url
  }
    }
  }
  
`

const New = gql`
{
    cars(where:{state:"New"}){
        title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  brand,
  image{
    url
  }
    }
  }
  
`
const Used = gql`
{
    cars(where:{state:"Used"}){
        title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  brand,
  image{
    url
  }
    }
  }
  
`

const Less100 = gql`
{
    cars(where:{price_lt:"100000"
  }){
  title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  image{
    url
  }
}
}
`;
const Less200 = gql`
{
    cars(where:{price_lt:"200000"
  }){
  title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  image{
    url
  }
}
}
`;


const More200 = gql`
{
    cars(where:{price_gt:"200000"
  }){
  title,
  id,
  year,
  country,
  price,
  state,
  inCart,
  image{
    url
  }
}
}
`;

export { cars, Audi, Mercedes, Lexus, New, Used, Less100, Less200, More200 }