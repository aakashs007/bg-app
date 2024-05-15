import notification from "antd/es/notification";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ToastInterface } from "../../../redux/types/app";
import { useEffect } from "react";
import { selectToastData } from "../../../redux/selectors/app";
import { updateToast } from "../../../redux/actions/app";

const Toast: React.FC = () => {
  const dispatch = useAppDispatch();
  const toastData: ToastInterface = useAppSelector(selectToastData());

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if(toastData && toastData.open && toastData.type) {
      api[toastData.type]({
        key: toastData.message || "key",
        message: toastData.message,
        description: toastData.description || null,
        onClose: () => {
          dispatch(updateToast({ open: false }))
        }
      });
    }
  }, [toastData])

  return contextHolder;
}

export default Toast;