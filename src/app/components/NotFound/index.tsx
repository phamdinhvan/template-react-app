import { Dialog } from "@mui/material";
import { useHistory } from "react-router-dom";
import NotFoundImg from "@Assets/images/notfound.png";
import LeftBottomImage from "@Assets/images/notfound/left-bot.jpg";
import LeftTopImage from "@Assets/images/notfound/left-top.jpg";
import RightImage from "@Assets/images/notfound/right-bot.jpg";
import { APP_ROUTES } from "@Const/module";
import "./index.scss";

//USING FOR NOTFOUND/COMMING_SOON
const NotFound = () => {
  const history = useHistory();
  return (
    <Dialog open={true} fullScreen>
      <div className="not-found">
        <div className="not-found__left">
          <img className="img-left" src={LeftTopImage} alt="leftTop" />
          <img className="img-left" src={LeftBottomImage} alt="leftBot" />
        </div>
        <div className="not-found__content">
          <div className="title">Không tìm thấy trang</div>
          <div className="des">Trang mà bạn tìm kiếm không còn tồn tại nữa</div>
          <img style={{ width: "48.8rem", height: "26rem" }} src={NotFoundImg} alt="" />
          <button
            type="submit"
            className="btn-confirm-style"
            onClick={() => history.push(APP_ROUTES.HOME)}>
            Quay lại trang chủ
          </button>
          <div className="rules">
            Điều khoản sử dụng và bảo mật
            <br />
            Phiên bản 1.2.21 • Bản quyền thuộc về
            <a
              style={{ color: "#0A6836", fontWeight: 700 }}
              rel="noreferrer"
              href={"https://www.greenfeed.com.vn/"}
              target="_blank">
              {" "}
              GREENFEED VIETNAM
            </a>
          </div>
        </div>
        <img className="img-right" src={RightImage} alt="right" />
      </div>
    </Dialog>
  );
};

export default NotFound;
