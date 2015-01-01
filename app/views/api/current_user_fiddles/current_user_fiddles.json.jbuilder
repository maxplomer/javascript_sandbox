json.array!(current_user.fiddles.reverse) do |fiddle|
  json.id fiddle.id
  json.user_id fiddle.user_id
  json.method_string fiddle.method_string
end