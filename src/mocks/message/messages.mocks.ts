import { User } from '../../models/user/user.interface';
import { USER_LIST } from '../user/user.mocks';
import { Message } from '../../models/message/message.interface';


const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach((user) => {
    messageList.push(
        {
            user: user, 
            date: new Date(),
            lastMessage: "herp derp"
        }
    )
});

export const MESSAGE_LIST = messageList;