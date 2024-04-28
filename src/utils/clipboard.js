import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();
import { showToast } from 'vant';

export const copyText = async (text) => {
	try {
	    await toClipboard(text);
		console.log("复制成功");
		showToast("复制成功");
	} catch (e) {
	    console.error(e);
	}
}
