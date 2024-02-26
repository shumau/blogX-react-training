import * as router from 'react-router-dom';
import PostPage from './PostPage';
import { render, screen } from '@testing-library/react';
jest.mock('react-router-dom')

  describe('PostPage', ()=>{
    const useParamsMock = jest.spyOn(router, 'useParams')
    it('render PostPage', ()=>{
        const postpage = render(<router.BrowserRouter><PostPage/></router.BrowserRouter>)
        expect(postpage).toMatchSnapshot();
    })
  })