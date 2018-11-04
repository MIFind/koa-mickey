const RESPONSE_CODE = {
  SUCCERSS: 0,
  FAIL_LOGIN: -20,
  FAIL_WX_USER: -1,
  FAIL_WX_USER_CATCH: -2,
  FAIL_SMS: -3,
  FAIL_SMS_EXPIRES_SHORT: -4,
  FAIL_SMS_CHECK: -5,
  FAIL_CREATE_ACCOUNT: -6,
  FAIL_GET_TOKENS: -7,
  FAIL_VERIFICATION: -8,
  FAIL_TRANSACTION: -9,
  FAIL_TRANSACTION_DUPLICATE: -10,
  FAIL_TRANSACTIONS: -11
}
const ERROR = {
  [RESPONSE_CODE.FAIL_LOGIN]: '登录失败',
  [RESPONSE_CODE.FAIL_WX_USER]: '获取用户信息失败',
  [RESPONSE_CODE.FAIL_WX_USER_CATCH]: '找不到对象',
  [RESPONSE_CODE.FAIL_SMS]: '获取验证码失败，请重新获取',
  [RESPONSE_CODE.FAIL_SMS_EXPIRES_SHORT]: '再次获取时间不足60s',
  [RESPONSE_CODE.FAIL_SMS_CHECK]: '验证码验证失败，请重新验证',
  [RESPONSE_CODE.FAIL_CREATE_ACCOUNT]: '创建账户失败',
  [RESPONSE_CODE.FAIL_GET_TOKENS]: '获取资产列表失败',
  [RESPONSE_CODE.FAIL_VERIFICATION]: '验证Token失败',
  [RESPONSE_CODE.FAIL_TRANSACTION]: '发货失败',
  [RESPONSE_CODE.FAIL_TRANSACTION_DUPLICATE]: '发货失败，请勿重复发货',
  [RESPONSE_CODE.FAIL_TRANSACTIONS]: '获取发货记录失败'
}

export {
  RESPONSE_CODE,
  ERROR
}
