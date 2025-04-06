import { usePeople } from '@hooks/use-people';
import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '@atoms/text'

const HomePage: FC = () => {
  const { people} = usePeople()
  const navigate = useNavigate()

  useEffect(() =>{
    console.log(people)
  },[people])

  return (
    <div>
      <Text as='h1'>Home Page</Text>
      <p className='text-text dark:text-dark-text'>Welcome to the home page!</p>
      <button onClick={() => navigate('/people')}>Go People</button>
    </div>
  );
};
export default HomePage;
