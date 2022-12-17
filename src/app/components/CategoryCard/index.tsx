import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { MoreHoriz as MoreHorizIcon } from "@mui/icons-material";
import "./index.scss";
import { checkLinkImage, loadCallback, stringAvatar } from "@Utils/other.util";
import { ImageUtil } from "@Utils/image.util";

export type P_Props = {
  selected?: boolean;
  onClick: (e?: any) => void;
  name: string;
  picture?: string;
  buildPictureSrc?: (src: string | null | undefined) => string | undefined;
  onActionClick?: (e: any) => void;
  moreIcon?: boolean;
  isAvatar: boolean;
  onIconClick?: (e?: any) => void;
};

const CategoryCard: React.FC<P_Props> = (props) => {
  const buildPictureSrc = props.buildPictureSrc || ImageUtil.buildProductCategoryImgSrc;

  return (
    <div
      className={`category-card ${props.selected ? "active" : ""}`}
      onClick={(e) => {
        props.onClick(e);
      }}>
      {props.picture ? (
        <img
          src={checkLinkImage(props.picture as string)}
          alt={"avt"}
          width="40"
          height="40"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <Avatar
          alt={props.name}
          src={props.isAvatar ? buildPictureSrc(props.picture) : props.picture}>
          <Avatar {...stringAvatar(props.name)} />
        </Avatar>
      )}
      <div className="category-card__name">{props.name}</div>

      <div
        className="category-card__action"
        onClick={(e) => {
          e.stopPropagation();
          loadCallback(props.onActionClick, e);
        }}>
        {props.moreIcon ? (
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              loadCallback(props.onIconClick, e);
            }}>
            <MoreHorizIcon style={{ fontSize: "2.2rem" }} />
          </IconButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default React.memo(CategoryCard);
