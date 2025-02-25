import logo from './logo.svg';
import './App.css';
import TvcFuncComp from './components/TvcFuncComp';
import TvcFuncComp1 from './components/TvcFuncComp1';
import TvcClassComp from './components/TvcClassComp';

function TvcApp() {
  // object
  const users = {
    fullName:'Chạch Văn Đoành',
    age:20,
    phone:"0978611889"
  }
  return (
    <div className="container border mt-3">
        <h1>Demo Component - Props - State</h1>
        <hr/>
        <div className='alert alert-danger'>
            <TvcFuncComp name="Chung Trịnh" address="25 Vũ Ngọc Phan" company = "Devmaster" />
            <hr/>
            <TvcFuncComp name="Mai Bình An" address="K23CNT1" company="Fit-NTU" />
        </div>
        <div className='alert alert-info'>
          <TvcFuncComp1 renderInfo={users} />
        </div>
        <TvcClassComp />
        {/* chuyển dữ liệu từ TvcApp -> xuống TvcClassComp */}
        <TvcClassComp renderName="K23CNT1" renderUsers={users} />
    </div>
  );
}

export default TvcApp;
