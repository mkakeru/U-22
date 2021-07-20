require "test_helper"

class Api::V1::PhonesControllerTest < ActionDispatch::IntegrationTest
  test "should get send_sms" do
    get api_v1_phones_send_sms_url
    assert_response :success
  end
end
