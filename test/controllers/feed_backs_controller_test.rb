require 'test_helper'

class FeedBacksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get feed_backs_index_url
    assert_response :success
  end

  test "should get show" do
    get feed_backs_show_url
    assert_response :success
  end

  test "should get new" do
    get feed_backs_new_url
    assert_response :success
  end

  test "should get edit" do
    get feed_backs_edit_url
    assert_response :success
  end

end
