import type {NextPage} from 'next'
import Title from "../ui/components/Title/Title";
import List from "../ui/components/List/List";

const Home: NextPage = () => {
    return (
        <div>
            <Title title={""}
                   subtitle={
                       <span>
                           Com um pequeno valor mensal, você pode <strong>adotar um pet virtualmente</strong>
                       </span>
                   }/>
            <List
                pets={[
                    {
                        id: 1,
                        name: 'Bilu',
                        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        photo: 'https://img.r7.com/images/2014/10/14/vd5bzibwb_5puhh97w0h_file.jpg?dimensions=650x407'
                    },
                    {
                        id: 2,
                        name: 'Cururu',
                        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        photo: 'https://mega.ibxk.com.br/2015/06/29/29183235917458.jpg'
                    },
                    {
                        id: 3,
                        name: 'Chupisca',
                        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        photo: 'https://s2.glbimg.com/1nvJAz6bSoVQ-LieSHPaNzcwlcY=/e.glbimg.com/og/ed/f/original/2018/07/06/tuna.jpg'
                    },
                    {
                        id: 4,
                        name: 'Xupacu',
                        history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        photo: 'https://razoesparaacreditar.com/wp-content/uploads/2021/05/cachorro-deformidades-1.jpg'
                    }
                ]}
            />
        </div>
    )
}

export default Home
