import AuthWrapper from '@/components/moleculs/AuthWrapper';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Paths';
const Index = lazy(async () => await import('@/components/pages/Index'));
const Login = lazy(async () => await import('@/components/pages/Login'));
const Mypage = lazy(async () => await import('@/components/pages/Mypage'));

export const NAVIGATIONS = {
  root: {
    path: paths.root,
    elem: <Index />,
  },
  login: {
    path: paths.login,
    elem: <Login />,
  },
  mypage: {
    path: paths.mypage,
    elem: (
      <AuthWrapper>
        <Mypage />
      </AuthWrapper>
    ),
  },
};

export default function Root(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(NAVIGATIONS).map((n, i) => {
          const item = NAVIGATIONS[n as keyof typeof NAVIGATIONS];
          return <Route key={i} path={item.path} element={item.elem} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
