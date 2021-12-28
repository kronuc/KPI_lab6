package Simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.concurrent.duration._

class TestFirstBasicAPISimulation extends Simulation{

  val httpConf: HttpProtocolBuilder = http
    .baseUrl("https://wft-geo-db.p.rapidapi.com/v1")
    .header("X-RapidAPI-Host","wft-geo-db.p.rapidapi.com")
    .header("X-RapidAPI-Key", "611ac1e7b8msh328f4370686d96ap197e37jsn5432245b96f8")

  val postIdNumbers = scala.util.Random

  val scn: ScenarioBuilder = scenario("api perf tests")
    .exec(http("first")
      .get("/geo/adminDivisions")
      .check(status.is(200))
    )
    .pause(5)
    .exec(http("second")
      .get("/geo/cities")
      .check(status.is(200)))

    .pause(5)


  setUp(scn.inject(rampUsers(10).during(100.seconds))).protocols(httpConf)
}