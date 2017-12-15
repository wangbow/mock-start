import { Message,Button,Icon} from 'tinper-bee';
import "./index.less";

/**
 * 日期返回，
 */
export function CreateIcon() {
   return <div className="create-show">
                <div className="create-icon-wraper"> <Icon type="uf-plus" /> </div>
                <div className="info">创建项目</div>
          </div>  
}