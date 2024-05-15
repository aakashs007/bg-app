import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row, Skeleton, Tooltip } from "antd";
import Title from "antd/es/typography/Title";
import style from "./style.module.css"
import Global from "../../global.module.css"
import { SearchOutlined } from "@ant-design/icons";
import { CustomDivider } from "../../components/atoms/divider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchVerse } from "../../redux/thunk/app";
import { isLoading, selectVerse } from "../../redux/selectors/app";
import { updateToast } from "../../redux/actions/app";

export function Verse() {
  const dispatch = useAppDispatch();
  const [chap, setChap] = useState<number>(1);
  const [verse, setVerse] = useState<number>(1);
  const currentVerse = useAppSelector(selectVerse());
  const loading = useAppSelector(isLoading());

  useEffect(() => {
    dispatch(fetchVerse(chap, verse));
  }, []);

  const handleInputChange = (e: any, type: "chap" | "verse") => {
    if(type === "chap") {
      setChap(e.target.value);
    } else {
      setVerse(e.target.value);
    }
  }

  const handleSearch = () => {
    if(!chap || !verse) {
      dispatch(updateToast({ type: "error", message: "Chapter or verse not present!", open: true }));
      return;
    }

    dispatch(fetchVerse(chap, verse));
  }

  const getSanskritVerse = () => {
    return (
      <Col span={12}>
        <Skeleton loading={loading} active avatar>
          <Title level={4}>
            {currentVerse.sanskritText || ""}
          </Title>
        </Skeleton>        
      </Col>
    );
  }

  const getWordMeanings = () => {
    return (
      <>
        <Col span={24} className={style.alignCenter}>
          <Title level={4}>Word Meaning</Title>
        </Col>
        <Col span={12}>
          <Skeleton loading={loading} active avatar>
            <p>
              {currentVerse.wordMeanings || ""}
            </p>
          </Skeleton>
        </Col>
      </>      
    )
  }

  const getTranslation = () => {
    return (
      <>
        <Col span={24} className={`${style.alignCenter} ${Global.marginTop1}`}>
          <Title level={4}>Translation</Title>
        </Col>
        <Col span={12}>
          <Skeleton loading={loading} active avatar>
            <h4>
              {currentVerse.translation || ""}
            </h4>
          </Skeleton>
        </Col>
      </>      
    )    
  }

  return (
    <Row className={style.alignCenter}>
      <Row className={Global.marginTop1}>
        <Col span={8} offset={1}>
          <Input
            type="number"
            placeholder="Chapter No."
            value={chap}
            onChange={(e) => handleInputChange(e, "chap")}
          />
        </Col>
        <Col span={8} offset={1}>
          <Input
            type="number"
            placeholder="Verse No."
            value={verse}
            onChange={(e) => handleInputChange(e, "verse")}
          />
        </Col>
        <Col span={2} offset={2}>
          <Tooltip title="search verse">
            <Button type="primary" shape="circle" icon={<SearchOutlined />}  onClick={handleSearch}/>
          </Tooltip>
        </Col>
      </Row>

      <Col span={24} className={style.alignCenter}>
        <Title level={2}>{`Chapter ${currentVerse.chapterNumber} Verse ${currentVerse.verseNumber}`}</Title>
      </Col>

      {getSanskritVerse()}

      <CustomDivider />

      {getWordMeanings()}
      {getTranslation()}
    </Row>
  );
}