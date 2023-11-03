/**
 * 指定された時間だけ待機してから、指定されたメッセージを解決するPromiseを返します。
 * @param message 待機後に解決されるメッセージ
 * @param time 待機する時間（ミリ秒）
 * @returns 指定された時間だけ待機してから、指定されたメッセージを解決するPromise
 * @throws timeが0以下の場合、エラーをスローします。
 */
export function deley(message: string, time: number) {
  return new Promise((resolve, reject) => {
    if (time > 0) {
      setTimeout(() => {
        resolve(message)
      }, time)
    } else {
      reject(new Error('time must be greater than 0'))
    }
  })
}
